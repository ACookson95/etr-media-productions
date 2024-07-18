const express = require("express");
exports.onCreateDevServer = ({ app }) => {
  app.use("/admin", express.static("public/admin"));
};
