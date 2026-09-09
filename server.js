import http from 'http'
import { obj } from './postController.js';


const PORT = 8000;


const server = http.createServer((req, res) => {
    // res.write('This is the running server')
    // res.setHeader('Content-Type','text/html')
    // res.setHeader('Content-Type','application/json')
    // res.statusCode(404)


    res.writeHead(404, {'Content-Type': 'application/json'})
    // res.end(`${obj.post}`)
    res.end(JSON.stringify({messgae : "Not Found"}))
})


server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})



// import  getPost, { getPostLength }  from "./postController.js";

// console.log(getPost());
// console.log(getPostLength());



// // const {generateNumber,celciusToFarenheit} = require('./utils')

// // console.log(`Random number ${generateNumber()}`);
// // console.log(`Celcius to farenheit ${celciusToFarenheit(45)}`);
