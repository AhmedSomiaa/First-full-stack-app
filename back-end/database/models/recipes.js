const conn = require("../index");

module.exports = {
  getAll: function () {
    const sql = `SELECT r.id, r.title, r.description, r.image_path, u.username AS author 
    FROM recipes r
    INNER JOIN users u ON r.authorId = u.id;
    `;
    return conn.query(sql);
  },

  getRecipesByUserId: function (authorId) {
    const sql = `
    SELECT id, title, description, image_path 
    FROM recipes 
    WHERE authorId = ?;
    `;
    return conn.query(sql, [authorId]);
  },

  getOneRecipe: function (authorId, idrecipe) {
    const sql = `SELECT r.id, r.title, r.description, r.image_path, u.username as author 
    FROM recipes r 
    INNER JOIN users u ON r.authorId = ? 
    WHERE r.id = ?
    `;
    return conn.query(sql, [authorId, idrecipe]);
  },

  addRecipe: function (recipe) {
    const sql = `INSERT INTO recipes SET ?`;
    return conn.query(sql, recipe);
  },

  updateRecipe: function (userId, recipeId, updatedRecipe) {
    const sql = `UPDATE recipes SET ? WHERE id = ? AND authorId = ?`;
    return conn.query(sql, [updatedRecipe, recipeId, userId]);
  },

  deleteRecipe: function (userId, recipeId) {
    const sql = `DELETE FROM recipes WHERE id = ? AND authorId = ?`;
    return conn.query(sql, [recipeId, userId]);
  },
};
