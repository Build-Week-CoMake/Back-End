const router = require('express').Router();
const db = require('./upvote.model');
const { auth: restricted } = require('../middleware.js');

//get list of all issues user has voted on
router.get('/', restricted, (req, res) => {
	const id = req.token.username;
	db.getUserVote(id)
		.then((votes) => {
			if (votes) {
				res.status(201).json(votes);
			} else {
				res.status(404).json({ message: 'Could not find any upvotes from given user id' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Failed to get users upvotes' });
		});
});

//add a users vote into the database
router.post('/:id', restricted, (req, res) => {
	const id = req.token.username;
	const voteData = {
		user_id: req.token.username,
		issue_id: req.params.id
	};

	db.add(voteData)
		.then((vote) => {
			db.getUserVote(id).then(r => {
				res.status(201).send(r)
			})
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Failed to add new upvote data' });
		});
});

router.delete('/:id', restricted, (req, res) => {
	const userId = req.token.username;
	const issueId = req.params.id;

	db.remove(userId, issueId)
		.then((deleted) => {
			if (deleted) {
				db.getUserVote(userId).then(r => {
					res.status(201).send(r)
				})
			} else {
				res.status(404).json({ message: 'Could not find upvote data with given ids' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Failed to delete upvote data' });
		});
});

module.exports = router;
