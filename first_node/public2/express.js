
const express = require('express');
const Pool = require('pg').Pool;
const app =express();
app.use(express.json());

//initial object pool pg
const pool= new Pool({
    host:'localhost',
    user:'postgres',
    password:'admin',
    database: 'hr-db',
    port:5432
});


const port = process.env.PORT||3001;
app.listen(port,()=>{`Server listening on port ${port}`});
console.log(app.listen());

app.get(`/`,(req,res)=>{res.send('hello express')});
app.get(`/json`,(req,res)=>{res.send((JSON.stringify({
    batch:"Batch#12",
bootcamp:["JS","ReactJS"]})))});

//buat crud with sql raw
app.get("/api/v1/regions",(req,res)=>{
    /**
     * call pool for query, param ke 1 :sql
     *  param 2 : binding params
     *  param 3 : result callback
     */
    pool.query('select region_id, region_name from regions',[],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows); // req status dijadikan ke json
                                            // karena throw maka masuka ke rows
    })
})    