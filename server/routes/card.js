const express = require("express");
const Card = require("../../knex/models/Card");
const router = express.Router();

//Time
router.use((req, res, next) => {
  console.log(`Time:       ${Date.now()}`);
  next();
});

router
  .route("/")
  .post((req, res) => {
    let data = ({
      title,
      priority,
      status,
      created_by,
      assigned_to
    } = req.body);
    return new Card(data)
      .save()
      .then(result => {
        result = result.toJSON();
        res.json(result);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  })
  .get((req, res) => {
    return new Card()
      .fetchAll()
      .then(result => {
        result = result.toJSON();
        res.json(result);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  });

router
  .route("/:id")
  .put((req, res) => {
    let data = ({
      title,
      priority,
      status,
      created_by,
      assigned_to
    } = req.body);
    return new Card({ id: req.params.id })
      .save({
        title: data.title,
        priority: data.priority,
        status: data.status,
        created_by: data.created_by,
        assigned_to: data.assigned_to
      })
      .then(result => {
        result.toJSON();
        res.json(result);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  })
  .delete((req, res) => {
    return new Card({ id: req.params.id })
      .destroy()
      .then(result => {
        result.toJSON();
        res.json(result);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  });
module.exports = router;
