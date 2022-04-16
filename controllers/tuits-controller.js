import * as tuitsDao from "../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = {
    topic: "Web Development",
    postedBy: {
      username: "ReactJS",
    },
    liked: false,
    disliked: false,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    "avatar-image": "/tuiter/images/react.png",
    "logo-image": "/tuiter/images/react.png",
    stats: {
      comments: 0,
      retuits: 0,
      likes: 0,
      dislikes: 0,
    },
    ...req.body,
  };

  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};
const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
};
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
