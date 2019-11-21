const { add, remove, getUserVote } = require('./upvote.model.js');
const db = require('../database/config.js');
const request = require('supertest');
const server = require('../server');

describe('upvote model', function() {
	it('items exist in DB', async function() {
		const upvotes = await db('upvotes');

		expect(upvotes.length).toBeGreaterThan(0);
	});
});

describe('/upvote endpoints', function() {
	it('GET /upvote returns 404 with no info provided', function() {
		return request(server).get('/').then((res) => {
			expect(res.status).toBe(404);
		});
	});
});
