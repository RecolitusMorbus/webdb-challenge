module.exports = {
  initToBoolean,
  booleanToInit,
  projectToBody,
  actionToBody
};

function initToBoolean(init) {
  return init === 1 ? true : false;
};

function booleanToInit(bool) {
  return bool === true ? 1 : 0;
};

function projectToBody(projects) {
  const results = {
    ...projects,
    completed: initToBoolean(projects.completed)
  };

  if (projects.actions) {
    results.actions = projects.actions.map(action => ({
      ...actions
    }))
  };

  return results;
};

function actionToBody(actions) {
  return {
    ...actions
  };
};