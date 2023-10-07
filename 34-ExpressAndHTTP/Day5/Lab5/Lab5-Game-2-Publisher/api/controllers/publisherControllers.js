const callbackify = require("util").callbackify;
require("dotenv").config();
const mongoose = require("mongoose");
const Publisher = require("../data/schemas/publisherModel");

const PublisherFindLimitSkipExecWithCallback = callbackify(function (
  offset,
  count
) {
  return Publisher.find().skip(offset).limit(count).exec();
});

const PublisherFindOneWithCallback = callbackify(function (PublisherId) {
  return Publisher.findById(PublisherId).exec();
});

const DeletePublisherByIdWithCallback = callbackify(function (PublisherId) {
  return Publisher.findByIdAndDelete(PublisherId).exec();
});

const PublisherInsertOneWithCallback = callbackify(function (newPublisher) {
  return Publisher.create(newPublisher);
});

const findByIdAndUpdateWithCallback = callbackify(function (newPublisher) {
  return Publisher.findByIdAndUpdate(newPublisher);
});

const getAll = function (req, res) {
  console.log("GET all Publishers", Publisher);
  let offset = process.env.DEFAULT_OFFSET;
  let count = process.env.DEFAULT_COUNT;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, process.env.BASE_TEN);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, process.env.BASE_TEN);
  }
  PublisherFindLimitSkipExecWithCallback(
    offset,
    count,
    function (err, Publishers) {
      console.log("Found Publishers", Publishers);
      if (err) {
        res
          .status(process.env.SERVER_ERROR_STATUS_CODE)
          .json({ message: process.env.INTERNAL_SERVER_ERROR });
      }
      res.status(process.env.OK_STATUS_CODE).json(Publishers);
    }
  );
};

const getOne = function (req, res) {
  const PublisherId = req.params.id;
  PublisherFindOneWithCallback(PublisherId, function (err, Publisher) {
    console.log("Found Publisher", Publisher);
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.Publisher_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(Publisher);
  });
};

const addOne = function (req, res) {
  console.log("POST new Publisher");
  console.log("Publisher AddOne request");
  const newPublisher = {
    title: req.body.title,
    year: req.body.year,
    rate: req.body.rate,
    price: req.body.price,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
    minAge: req.body.minAge,
  };

  PublisherInsertOneWithCallback(newPublisher, function (err, Publisher) {
    const response = {
      status: process.env.CREATED_STATUS_CODE,
      message: Publisher,
    };
    if (err) {
      console.log("Error creating Publisher");
      res
        .status(process.env.SERVER_ERROR_STATUS_CODE)
        .json({ message: process.env.INTERNAL_SERVER_ERROR });
    }
    res.status(response.status).json(response.message);
  });
};

const fullUpdateOne = function (req, res) {
  console.log("PUT one Publisher");
  const PublisherId = req.params.id;

  findByIdAndUpdateWithCallback(
    PublisherId,
    req.body,
    { new: true },
    (err, Publisher) => {
      if (err) {
        res
          .status(process.env.SERVER_ERROR_STATUS_CODE)
          .json({ message: process.env.INTERNAL_SERVER_ERROR });
      } else if (!Publisher) {
        res
          .status(process.env.NOT_FOUND_STATUS_CODE)
          .json({ message: process.env.Publisher_NOT_FOUND });
      } else {
        const response = {
          status: process.env.OK_STATUS_CODE,
          message: Publisher,
        };
        res.status(response.status).json(response.message);
      }
    }
  );
};

const partialUpdateOne = function (req, res) {
  console.log("PATCH one Publisher");
};

const deleteOne = function (req, res) {
  console.log("DELETE one Publisher");
  const PublisherId = req.params.id;
  DeletePublisherByIdWithCallback(PublisherId, function (err, Publisher) {
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.Publisher_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(Publisher);
  });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
  getOne,
  fullUpdateOne,
  partialUpdateOne,
};
