const mailer = require('nodemailer');
const {CONSTANTS} = require('../constants');

class EmailController {
    
    constructor() {
        
        this.transporter = mailer.createTransport({
            service: CONSTANTS.EMAIL.SERVICE,
            auth: {
                user: CONSTANTS.EMAIL.FROM.USER,
                pass: CONSTANTS.EMAIL.FROM.PASS
            }
        });
    
    }

    async send(to, subject, body, attachments) {
        const options = {
            from: CONSTANTS.EMAIL.FROM.USER,
            to,
            subject,
            html: body,
            attachments
        }
        console.log(options)
        this.transporter.sendMail(options, (e, info) => {
            if (e) throw new Error(e);
            console.log('Email sent' + info.response);
        });
    }
}

module.exports = {
    EmailController
}