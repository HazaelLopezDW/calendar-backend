const Auth = require('./auth.controller');
const Event = require('./events.controller');

module.exports = {
    ...Auth,
    ...Event
}