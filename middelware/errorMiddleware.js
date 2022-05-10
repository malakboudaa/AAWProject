const { stack } = require("../Routes/Responsible")


const errorMiddleware = (err, req, res, next) => {
    const codeStatus = res.statusCode ? res.statusCode : 500 

    res.status(codeStatus)

    res.json({
        message : err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })

}
module.exports = errorMiddleware