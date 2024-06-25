const express = require('express');
const appExp= express()
const port=3000

appExp.use(express.static('dist'));

appExp.set('view engine', 'ejs');
appExp.get('/',(req,res)=>{
    res.render('../dist/index')
})

appExp.listen(port,()=>{
    console.log(`running on port ${port}`)
})