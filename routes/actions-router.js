const express = require('express');
const Action = require('../data/actions-model.js');

const actionsRouter = express.Router();

/* MIDDLEWARE */
actionsRouter.use(express.json());

/* ROUTES */
actionsRouter.get('/', async (req, res) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

actionsRouter.get('/:id', async (req, res) => {
  try {
    const action = await Action.get(req.params.id);
    if (project) {
      res.status(200).json(action);
    } else {
      res.status(400).json({ message: `Invalid action ID. Please provide a valid action ID.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

actionsRouter.post('/', async (req, res) => {
  const { name, notes, project_id } = req.body
  try {
    const newAction = await Action.insert(req.body);
    if (!name && !notes && !project_id) {
      res.status(400).json({ message: `Please provide an action name, notes, and a corresponding project ID.` });
    } else {
      res.status(200).json(newAction);
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

actionsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  try {
    const action = await Action.get(id);
    if (action) {
      await action.update(id, { name, description, completed });
      res.status(200).json(project);
    } else {
      res.status(400).json({ message: `Invalid action ID. Please provide a valid action ID.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

actionsRouter.delete('/:id', async (req, res) => {
  try {
    const action = await Action.remove(req.params.id);
    if (action) {
      res.status(200).json(project);
    } else {
      res.status(400).json({ message: `Invalid action ID. Please provide a valid action ID.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `An error occurred: ${err}` });
  };
});

module.exports = actionsRouter;