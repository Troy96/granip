const mailer = require('nodemailer');

class EmailController {
    
    constructor() {
        
        this.transporter = mailer.createTransport({
            service: '',
            auth: {
                user: '',
                pass: ''
            }
        });
    
    }

    async send(to, subject, body) {
        const options = {
            from: '',
            to,
            subject,
            html: body
        }
        this.transporter.sendMail(options, (e, info) => {
            if (err) throw new Error(err);
            console.log('Email sent' + info.response);
        });
    }
}

module.exports = {
    EmailController
}