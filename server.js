const express = require('express');
const appExp= express()
const port=3000

appExp.use(express.static('dist'));
appExp.use(express.static('dist/src'));
appExp.set('view engine', 'ejs');
appExp.get('/',(req,res)=>{
    res.render('../dist/index')
})
appExp.get('/Auth',(req,res)=>{
    res.render('../dist/Auth')
})
appExp.get('/Contact',(req,res)=>{
    res.render('../dist/src/Contact')
})

appExp.listen(port,()=>{
    console.log(`running on port ${port}`)
})