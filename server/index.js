const express = require("express")
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000
const User = require("./models/User")

const middleware=require("./middleware")

middleware();
app.listen(PORT, () => {
    console.log("server is running on PORT "+PORT)
})

app.get("/users", (req, res) => {
    User.find().then(users => res.json(users))
})

app.post("/signin", (req, res) => {
    const { email,password } = req.body
    User.find({ email, password }).then(user => {
        if(user)
            res.json(user)
        else
            res.json({
                error: {
                    statement:"Email or Password is incorrect. If not regiestered yet? Signup "
                }
            })
    })
})
app.post("/user/add", (req, res) => {
    const { fullName, email, password } = req.body
    const _newUser = new User({ fullName, email, password })
    User.findOne({email}).then(user => { 
        if (!user) {         
            _newUser.save()
                .then((user) => {
                res.json(user)
            })
        } else {
            console.log(user)
            res.json({ 
                error: {
                    statement:"Email already exist. SignIn "
                }
            })
        }
    })
})

