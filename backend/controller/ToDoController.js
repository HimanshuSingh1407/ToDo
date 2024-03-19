const ToDoModel = require("../models/TodoModel");

//get todo/read todo
module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

// add todo/create todo
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;

  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong! to save Todo" });
    });
};

// update a specific todo by its ID
module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully...");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong! to update Todo" });
    });
};

// delete a specific todo by its ID
module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully...");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong! to delete Todo" });
    });
};
