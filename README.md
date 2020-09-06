
## Granip (Google Images Random Picker)

### Description

> A scraping tool that sends a unique image on a topic out of scraped images from Google Images based on the cron pattern (every day at 6:00AM) provided to the recipient's email.
Currently the recipient's email is hardcoded as the the user who is sending email. This will be changed in future versions.

#### Prerequisite
-   NodeJS
-   NPM
-   MongoDB

### Environment Variables
```
TOPIC           //topic to scrape for
LIMIT           //Optional. Number of results from scraping api
USER_MAIL       //Email of user who wants to send alerts
USER_PASS       //Password of above user
CRON_PATTERN    //Cron pattern for sending image 
MONGODB_URI      //Your MongoDb Cloud or local
```

### Author
-  Tuhin Roy | troy0870@gmail.com
