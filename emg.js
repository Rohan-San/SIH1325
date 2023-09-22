// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

// function makeTwilioCall(){
    const accountSid = "AC9f06879304a222522a49f487dc7f1801";
    const authToken = "1ce75bdb9b1e409ae5448ff413b3a8e9";
    const client = require("twilio")(accountSid, authToken);
    client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml",
        to: "+919611426536",
        from: "+18507898376",
    })
    .then(call => console.log(call.sid));

    var twilio = require('twilio');
    // Find your account sid and auth token in your Twilio account Console.
    var cl = new twilio('AC9f06879304a222522a49f487dc7f1801', '1ce75bdb9b1e409ae5448ff413b3a8e9');
    // Send the text message.
    cl.messages.create({
        to: '+919611426536',
        from: '+18507898376',
        body: 'Ambulance dispatched!'
    });
// 
