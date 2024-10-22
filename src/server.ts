import app from "./app";
import config from "./app/config";
import mongoose from "mongoose"
import { seed } from "./app/module/User/User";



async function main() {
    
    await mongoose.connect(config.dbUrl as string)
    await seed()

    app.listen(config.port,()=>{
        console.log(`the running port is: ${config.port}`);
    })
}

main()