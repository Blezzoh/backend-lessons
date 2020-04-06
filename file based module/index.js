var areas = require('./areas')
var solveAreas = () =>{
    console.log('triange w/ b=2, h=4', areas.triangle(2,4))
    console.log('rectangle w/ x=2, y=4', areas.rectange(2,4))
    console.log(areas.add(),areas.add())
}

solveAreas()