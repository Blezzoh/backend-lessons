const itemRouter = require("express").Router();
const bodyParser = require('body-parser')

itemRouter.use(bodyParser.json())

itemRouter.route('/')
    .get((req, res, next) => {
        console.warn('getting item')
        res.end('item 1, item2, item3. That\'s all we have')
    })
    .post((req, res, next) => {
        const { name, value } = req.body
        res.end(`${name} item with value ${value} created!`);
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('operation not supported')
    })
    .delete((req, res, next) => {
        res.end('All items have been deleted')
    })

itemRouter.route('/:itemId')
    .get((req, res, next) => {
        const { name, value } = req.body
        res.end(`item with id ${req.params.itemId}`)
    })

    .post((req, res, next) => {
        res.statusCode = 403
        res.end('operation not supported use post [apiurl]/item')
    })

    .put((req, res, next) => {
        const { name, value } = req.body
        if (name) {
            res.end(`changed name of item with id ${req.params.itemId} to ${name}`)
        }
        else {
            res.end(`changed value of item with id ${req.params.itemId} to ${value}`)
        }
    })

    .delete((req, res, next) => {
        res.end(`item with id ${req.params.itemId} deleted`)
    })

module.exports = itemRouter
