var rectangle = (x, y, callback) =>{
    if(x<0 || y<0){
        setTimeout(()=>{
            return callback( new Error('dimension given are less than 0'), null)
        }, 1000)
    }
    else{
        setTimeout(()=>{
            return callback(null, {
                perimeter: () => 2*(x+y),
                area: () => x * y,
            })
        })
    }
}

module.exports = rectangle