const knex = require('../database/config');

module.exports = {
	add,
	remove,
	getUserVote
};

function add(upvote) {
	return db('upvotes').insert(upvote); // {user_id: '', issue_id: ''}
}

function remove(userId, issueId) {
	return db('upvotes').where({ user_id: userId, issue_id: issueId }).del();
}

function getUserVote(userId) {
	return db('upvotes').where({ user_id: userId });
}
