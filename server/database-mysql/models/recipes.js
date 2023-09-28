const conn = require ('../index');
module.exports = {
    // Fetch all recipes using promises.
    getAll: () => {
      const sql = `
      SELECT
        recipes.id AS recipe_id,
        recipes.title AS recipe_title,
        recipes.description AS recipe_description,
        users.username AS poster_username,
        comments.id AS comment_id,
        comments.description AS comment_description,
        comments.commentorId AS commentor_id
      FROM
        recipes
      INNER JOIN
        users ON recipes.posterId = users.id
      LEFT JOIN
        comments ON recipes.id = comments.recipesId
      ORDER BY
        recipes.id, comments.id;
    `
      return conn.query(sql);
    },
    // Retrieve all recipes from a specific user using promises.
    getUserRecipes: (posterId) => {
      const sql = `SELECT r.id, r.title, r.description 
      FROM recipes r INNER JOIN users u ON r.posterId = u.id 
      WHERE r.posterId = ?`;
      return conn.query(sql, posterId);
    },
    // Add a recipe to the recipes table from a specific user using promises.
    add: (recipe, posterId) => {
      const sql = `UPDATE recipes SET ? INNER JOIN`
    
      return conn.query(sql, recipe);
    },
    //Update a recipe from a pecific user using promises.
    update: (recipe, posterId) => {
      return conn.query('Update`recipes` SET ?', recipe);
    }

  };