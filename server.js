const express = require("express");

const app = express();
app.use(express.json());

const books = [
    {
        title: 'b1',
        author: 'a1',
        price: 25
    },
    {
        title: 'b2',
        author: 'a2',
        price: 50
    },
];

const addNumber = (n1, n2) => {
    console.log("The result is " + (n1 + n2));
    return n1 + n2;
}

// addNumber(10, 12);

app.get("/book", (req, res) => {
    if (req.query.title != null) {
        //search by title
        res.json(
            books.filter(x => x.title == req.query.title)
        )

    } else {
    res.json(books);
}
});

app.post("/book", (req, res) => {

    //validate the incoming data
    books.push(req.body);
    res.json({
        statusCode: 204,
    });
});



app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addNumber(n1, n2);
    res.json({
        statusCode: 200,
        data: result
    });
});

app.post("/addTwoNumbers", (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    const result = addNumber(n1, n2);
    res.json({
        statusCode: 200,
        data: result
    });
});



const port = 3030;

app.listen(port, () => {
    console.log("App is now listetning to: " + port);
});


