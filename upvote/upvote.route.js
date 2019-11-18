const router = require('express').Router();
const db = require('./upvote.model');

//get list of all issues user has voted on
router.get('/', (req, res) => {
	const id = req.body.user_id;
	db
		.getUserVote(id)
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
router.post('/vote', (req, res) => {
	const voteData = req.body;
	if (!req.body.user_id || !req.body.issue_id) {
		res.status(401).send('user_id and issue_id are required');
	}

	db
		.add(voteData)
		.then((vote) => {
			res.status(201).json(vote);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Failed to add new upvote data' });
		});
});

router.delete('/:uid/:iid', (req, res) => {
	const userId = req.params.uid;
	const issueId = req.params.iid;

	db
		.remove(userId, issueId)
		.then((deleted) => {
			if (deleted) {
				res.status(201).json({ message: 'removed upvote' });
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
