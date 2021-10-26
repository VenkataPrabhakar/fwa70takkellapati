var express=require('express')
 
var router=express.Router();
 
router.get('/',(req,res)=>{
    let ran=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data,ran);
    res.write('${Math.hypot(ran)}'
    );
})
 
module.exports=router