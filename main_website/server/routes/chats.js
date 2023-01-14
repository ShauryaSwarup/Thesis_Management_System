const express = require("express");
const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const chats = require("../data");

router.get("/", (req, res) => {
  res.send(chats);
});

router.get("/:id", (req, res) => {
  console.log("idhar hu");
  const { id } = req.params;
  console.log(id);
  const findChat = chats.find((chat) => chat.id === id);
  res.send(findChat);
});

module.exports = router;
