const db = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = (req,res)=>{
    // find a single user in the db if esists
    db.Admin.findOne({where: { email: req.body.email } }).then(user => {  
        if (!user) {
            return res.status(404).send({status:'error', message: 'Email Not Found' })
        } else {
            // compares the password provided with the hash
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                        res.status(401).json({
                        status:'error',
                        message: "Auth failed",
                        error: err
                    });
                }
                if (result) {
                    // creates jwt signature token 
                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user.id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "5h"
                        }
                    );
                        res.status(200).send({
                        message: 'Auth Successful',
                        token: token,
                        id: user.id,
                        email: user.email
                    })
                } else {
                    res.status(401).send({status:'error', message: 'Passwords Do Not Match' })
                }
            })
        }
    })
}