const cron = require('node-schedule');

class CronController {
    constructor() { }

    async run(pattern, fn) {
        cron.scheduleJob(pattern, fn)
    }
}

module.exports = {
    CronController
}