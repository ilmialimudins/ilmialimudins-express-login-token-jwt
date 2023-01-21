import "dotenv/config"
import express from "express"
import models,{sequelize} from "./models/init-models"
import router from "./route/indexRoutes"

const port=process.env.PORT||3001 //agar dinamis

const app= express();  //panggil metode express

app.use(express.json());  // agar bisa membaca format json
app.use(express.urlencoded({extended:true})) // memproses agar format bisa 

app.use(async(req,res,next)=>{
    req.context={models};
    next();
})

const dropDatabaseSync=false;    //variabel biasa tipe false
sequelize.sync({force:dropDatabaseSync})  //sinkronisasi tanpa hapus database 
.then(()=>{  //kalau out put tidak error
    if(!dropDatabaseSync){
        console.log("Database do not drop" +port)
    }
})

app.listen(port,()=>{console.log(`Succes , Your Application is Running , Server listening on port ${port}`)});


app.use(router)