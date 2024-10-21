import app from "./app";
import config from "./app/config";
import mongoose from "mongoose"



async function main() {
    
    await mongoose.connect(config.dbUrl as string)

    app.listen(config.port,()=>{
        console.log(`the running port is: ${config.port}`);
    })
}

main()