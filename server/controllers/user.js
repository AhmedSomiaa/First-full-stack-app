const bcrypt = require ('bcryptjs')
const User = require ('../database-mongo/user.models');

const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 8)
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};
const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ username, email });
        console.log(user);
        if (!user) return res.sendStatus(401);
        const passwordMatch = bcrypt.compareSync(password, user.password);
        console.log(passwordMatch)
        if (!passwordMatch) return res.sendStatus(401);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    signup,
    login
}