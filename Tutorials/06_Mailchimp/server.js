const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);



app.get("/", (req, res) => {
    res.render("signup");
});


app.post("/", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);

    const listId = "650aea2c83";
    const apiKey = "e18dbe7f37db0fbf58c141dd98614324-us12";
    const url = "https://us12.api.mailchimp.com/3.0/lists/" + listId;
    const options = {
        method: "POST",
        auth: "Ren:" + apiKey,
        headers: {
            "Content-Type": "application/json", 
        },
    }

    const name = fName;
    var mailRequest = https.request(url, options, (response) => {
        let data = ""; 

        response.on("data", (chunk) => {
            data += chunk; 
        });

        response.on("end", () => {
            try {
                const jsonResp = JSON.parse(data);

                if (response.statusCode === 200 && jsonResp.error_count === 0) {
                    res.render("success", {name:name});
                } else {
                    console.log(jsonResp.errors[0]["error_code"]);
                    console.log(jsonResp.errors[0]["error"]);
                    res.render("failure", {name:name});
                }
            } catch (error) {
                console.error("Error analizing the JSON response:", error);
                res.render("failure", {name:name});
            }
        });
    });

    mailRequest.on("error", (error) => {
        console.error("Error in Mailchimp request:", error);
        res.render("failure");
    });

    mailRequest.write(jsonData);
    mailRequest.end();
});    

app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});