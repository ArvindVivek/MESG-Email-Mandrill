mandrill_client = new mandrill.Mandrill('abc123abc123abc123abc123abc123-us1');
mandrill_client.users.senders({}, function(result) {
    console.log(result);
    /*
    [{
            "address": "sender.example@mandrillapp.com",
            "created_at": "2013-01-01 15:30:27",
            "sent": 42,
            "hard_bounces": 42,
            "soft_bounces": 42,
            "rejects": 42,
            "complaints": 42,
            "unsubs": 42,
            "opens": 42,
            "clicks": 42,
            "unique_opens": 42,
            "unique_clicks": 42
        }]
    */
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Invalid_Key - Invalid API key
});