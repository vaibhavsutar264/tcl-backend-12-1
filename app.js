const app = require("./server"); 



// console.log(youtube);


const server = app.listen(process.env.PORT || 8585,()=>{

    console.log(`Server is running on http://localhost:${process.env.PORT}`) //this is port on which we will work for backend
})


