module.exports.CONSTANTS = {
    SEARCH: {
        TOPIC: process.env.TOPIC || 'good morning',
        LIMIT: process.env.LIMIT || 100
    },
    EMAIL: {
        SERVICE: 'gmail',
        FROM: {
            USER: process.env.USER,
            PASS: process.env.PASS
        },
        RECEPIENT: process.env.USER,
    }
}