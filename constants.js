module.exports.CONSTANTS = {
    SEARCH: {
        TOPIC: process.env.TOPIC || 'good morning',
        LIMIT: process.env.LIMIT || 100
    },
    EMAIL: {
        SERVICE: 'gmail',
        FROM: {
            USER: process.env.USER_MAIL,
            PASS: process.env.USER_PASS
        },
        RECEPIENT: process.env.USER_MAIL,
    },
    CRON_PATTERN: process.env.CRON_PATTERN || '0 6 * * 1-7' //Every day at 06:00AM
}