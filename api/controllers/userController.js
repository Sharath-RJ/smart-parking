const User = require("../models/user")

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }
        user = new User({
            username,
            email,
            password,
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()
        const payload = {
            user: {
                id: user.id,
            },
        }
        jwt.sign(
            payload,
             "secret",
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )
    } catch (error) {
        console.error("Error registering user:", error)
        res.status(500).json({ error: "Failed to register user" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const payload = {
            user: {
                id: user.id,
            },
        }

        jwt.sign(
            payload,
            "secret",
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )
    } catch (error) {
        console.error("Error logging in user:", error)
        res.status(500).json({ error: "Failed to log in user" })
    }
}

module.exports={
    login,
    register
}