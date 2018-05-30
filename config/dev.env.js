'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api_key: '"AIzaSyCy7PDOjpnTzA9W4-8ygwm9cpIcs17ZalQ"'
})
