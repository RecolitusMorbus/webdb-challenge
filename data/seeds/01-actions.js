exports.seed = function(knex, Promise) {
  return knex('actions')
    .truncate()
    .then(function() {
      return knex('actions').insert([
        {
          name: 'Imperial Action I',
          notes: 'This action is handed down to you by your Glorious Padishah-Emperor Project Correno I. Make more.',
          project_id: 0
        }
      ])
    })
}