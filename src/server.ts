import {Server} from "http";

import mongoose from "mongoose";
import app from "./app";

let server: Server;
const PORT = 5000;

async function main(){
     try{
        await mongoose.connect('mongodb+srv://atiqse999:0LusSV6IVq6J4QTh@cluster0.grvck.mongodb.net/library-management-app?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to mongodb using mongoose")
        server = app.listen(PORT, ()=>{
            console.log(`App is listening on port ${PORT}`);
        });

     } catch(error){
        console.log(error);
     }
}
main()