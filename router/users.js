const express = require('express')
const router = express.Router()

const usercontoller = require('../controllers/user')

router.route('/users')
	.get(usercontoller.index)
	.post(usercontoller.store)

router.get('/users/create', usercontoller.create)

router.get('/users/:id', usercontoller.show)

router.put('/users/:id', usercontoller.update)

router.delete('/users/:userId', usercontoller.delete)

module.exports = router