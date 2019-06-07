exports.seed = function(knex, Promise) {
  return knex('projects')
    .truncate()
    .then(function() {
      return knex('projects').insert([
        {
          name: 'Padishah-Emperor Project Correno I',
          description: 'In the name of the His Majesty Project Correno I, Padishah-Emperor of the Imperium of Man and the Known Universe, create actions for yourself associated with your Sovereign.',
          completed: false
        }
      ]);
    });
};