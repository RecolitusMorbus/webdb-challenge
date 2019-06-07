const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const mappers = require('./mappers.js');

module.exports = {
  getProjects,
  getProject,
  insert,
  update,
  remove,
  getProjActs
}

function getProjects() {
  return db('projects')
    .join('actions', 'projects.id', '=', 'actions.project_id')
    .select(projects , { actions: 'actions' });
};

function getProject(id) {
  return db('projects')
    .join('actions', 'projects.id', '=', 'actions.project_id')
    .select('projects.id', 'projects.name', 'projects.description', 'projects.completed', {
      actions: [
        'actions.id',
        'actions.name',
        'actions.notes',
        'actions.project_id'
      ]
    });
};

// function get(id) {
//   const projects = db('projects');
  
//   if (id) {
//     projects
      // .join('actions', 'projects.id', '=', 'actions.project_id')
      // .select('projects.id', 'projects.name', 'projects.description', 'projects.completed', {
      //   actions: [
      //     'actions.id',
      //     'actions.name',
      //     'actions.notes',
      //     'actions.project_id'
      //   ]
      // })
//       .where({ 'projects.id': projects.id });

//       const promises = [projects, this.getProjActs(id)];

//       return Promise.all(promises).then(function(results) {
//         let [projects, actions] = results;
//         if (projects) {
//           projects.actions = actions;
//           return mappers.projectToBody(projects);
//         } else {
//           return null;
//         }
//       })
//   }

//   return projects.then(projects => {
//     return projects.map(projects => mappers.projectToBody(projects));
//   });
// };

async function insert(project) {
  return db('projects')
    .insert(project)
    .then(() => { return get() });
    // .then(([id]) => this.get(id));
};

function update(id, changes) {
  return null;
};

function remove(id) {
  return null;
};

function getProjActs(project_id) {
  return db('actions')
    .where('project_id', project_id)
    .then(actions => actions.map(action => mappers.actionToBody(action)));
};