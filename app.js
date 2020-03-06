var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var appDir = path.dirname(require.main.filename);

var app = express();

app.use('/assets/css', express.static('css'));
app.use(express.static('html'));
app.use('/assets/js', express.static('js'));

//starts app
app.listen(8000, () => {
    console.log('Project listening on port 8000!')
});

//loads home page on start up
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'./html/login.html'));
});


/* LOGIN */
/*
app.post('/login',urlencodedParser,  function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log("post received: Username: %s Password: %s", email, password);

    //checks login against database
    var request = "SELECT email, password FROM User WHERE email = '" + email + "'";
    con.query(request, function (err, result) {
    if (err){
        res.redirect(req.get('referer'));
    }
    if (!result.length){
        console.log("Invalid username")
        res.redirect(req.get('referer'));
    }
    var pw_hash = result[0]["password"];
    var email = result[0]["email"];
    bcrypt.compare(password, pw_hash, function(err, res2) {
        if (res2){
            console.log("Authenticated");
            cur_user = email;
            console.log(cur_user)
            res.sendFile(path.join(__dirname,'./html/locationSearch.html'));
        } else {
            console.log("Invalid password")
            res.redirect(req.get('referer'));
        }
        });
    });
});
*/
/* REGISTRATION */
/*
app.post('/register',urlencodedParser,  function(req, res) {
    var email = req.body.email;
    var password = req.body.pass;
    var confirmpass = req.body.confirmpass;
    console.log(req.body);

    var valid = true;
    if (password.length < 8 || password.length > 20) {
        valid = false;
    }
    if (password != confirmpass) {
        valid = false;
    }

    if (valid) {
        bcrypt.hash(password, 10, function(err, hash) {
        var query = "INSERT INTO User (password, email) "+
        "VALUES ('" + hash + "', '" + '" + email + "';

        console.log(query);
        con.query(query, function(err) {
            if (err) {
            console.log("Registration attempt failed");
            res.redirect(req.get('referer'));
            } else {
            console.log("Registration success");
            res.sendFile(path.join(__dirname,'./html/login.html'));
            }
            });
        });
    } else {
        console.log("Invalid input");
        res.redirect(req.get('referer'));
    }
});
*/
