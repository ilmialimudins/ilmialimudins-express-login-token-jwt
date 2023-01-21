


import { Sequelize, sequelize } from "../models/init-models";

const findRegions = async(req,res)=>{
    const result= await sequelize.query
    ('select region_name from regions',
    {type:sequelize.QueryTypes.SELECT,
        model:req.context.models.regions,
        mapTopModel:true
    })
    return res.send(result) 
}

const findRegionsAll = async(req,res)=>{
    const result= await req.context.models.regions.findAll();
    return res.send(result)
}

export default{
    findRegions,findRegionsAll
}