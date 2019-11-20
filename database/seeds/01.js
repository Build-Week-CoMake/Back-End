
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
        { title: "a", picture: "(url)", location: "mars", description: " ", user_id: "admin" },
        { title: "b", picture: "(url)", location: "mars", description: " ", user_id: "admin" },
        { title: "c", picture: "(url)", location: "mars", description: " ", user_id: "admin" },
        { title: "a", picture: "(url)", location: "earth", description: " ", user_id: "admin" },
        { title: "b", picture: "(url)", location: "earth", description: " ", user_id: "admin" }
      ]);
    });
};
