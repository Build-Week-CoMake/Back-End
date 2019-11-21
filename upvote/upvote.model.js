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

async function getUserVote(userId) {
	let issues = knex('upvotes')
		.innerJoin("issues", "issues.id", "upvotes.issue_id")
		.where({ "upvotes.user_id": userId });

	let votes = await knex("upvotes")
		.select("*")

	let reduced = votes.reduce((acc, val) => {
		let exists = acc[val.issue_id]
		return {
			...acc,
			[val.issue_id]: (exists) ? acc[val.issue_id] + 1 : 1
		}
	}, {})

	let joined = issues.map(v => {
		return {
			...v,
			count: reduced[v.id] || 0
		}
	})

	return joined
}
