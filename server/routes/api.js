const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

router.get('/posts',(req,res)=>{

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(posts=>  {
    res.status(200).json(posts.data);
})
.catch(error =>{
res.status(500).error(error);
});



});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;