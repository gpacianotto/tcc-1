var express = require('express');
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/table', (req, res) =>{
//   // console.log(req,body);
//   // if(req.body.active === true)
//   // {
//   //   res.send({message: "Sim"});
//   // }

//   // res.send({message: "Não"})
//   res.send('Table')
// })

app.route('/table')
  .post((req, res) => {
    console.log(req.body);
    if(req.body.active === true)
    {
      res.send({message: "Sim"});
    }

    res.send({message: "Não"})
  })

// app.route('/table')
//   .get((req, res) => {
//     res.send({message: "OK"});
//   })

app.get('/table', (req, res) => {
  res.send("OK");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})