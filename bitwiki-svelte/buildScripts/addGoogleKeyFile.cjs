const fs = require('fs');

const googleKeyFilePath = __dirname + '/../src/google_credentials_keyfile.json'
console.log(googleKeyFilePath);
fs.writeFile(googleKeyFilePath, process.env.GOOGLE_CREDENTIALS, (err)=>{
    console.log(err);
})