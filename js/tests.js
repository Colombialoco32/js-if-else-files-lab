var index = require("./index.js")

    console.log("The name and height are correct")
} else {
    console.log("not correct")
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
