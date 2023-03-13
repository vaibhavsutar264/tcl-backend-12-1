const app = require("./server"); 



// console.log(youtube);





const server = app.listen(process.env.PORT || 8585,()=>{

    console.log(`Server is running on http://localhost:${process.env.PORT}`) //this is port on which we will work for backend
})


process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the pc due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
});

