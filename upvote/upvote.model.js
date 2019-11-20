const knex = require('../database/config');

module.exports = {
	add,
	remove,
	getUserVote
};

function add(upvote) {
	return knex('upvotes').insert(upvote); // {user_id: '', issue_id: ''}
}

function remove(userId, issueId) {
	return knex('upvotes').where({ user_id: userId, issue_id: issueId }).del();
}

function getUserVote(userId) {
	return knex('upvotes')
		.innerJoin("issues", "issues.id", "upvotes.issue_id")
		.where({ "upvotes.user_id": userId });
}
