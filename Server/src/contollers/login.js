const users = require("../utils/users")


const login = (req, res) => {
    const { email , password} = req.query
    users.forEach((user) => {
        console.log(user)
        console.log(email)
        console.log(password)
        if(user.email === email && user.password === password) {
            return res.status(200).json({access: true});
        }
    });

    return res.status(200).json({access: false});
}

module.exports = login;