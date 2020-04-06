var areas = require('./reactangle')
const callback = (err, rectangle)=>{
    if(err){
        return console.log('error:', err.message)
    }
    else{
        return console.log('perimiter', rectangle.perimeter(),' area:', rectangle.area())
    }
}

areas(2,4, callback)