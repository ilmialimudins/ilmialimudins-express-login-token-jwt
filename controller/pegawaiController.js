import { Sequelize, sequelize } from "../models/init-models";
import models from "../models/init-models";

// const findAllPegawai = async(req,res)=>{
//     const result= await sequelize.query
//     ('select first_name,last_name,email from employees',
//     {type:sequelize.QueryTypes.SELECT,
//         model:models.employees,
//         mapTopModel:true
//     })
//     return res.send(result) 
// }

// const findAllRows = async(req,res)=>{
//     const result= await req.context.models.employees.findAll();
//     return res.send(result)
// }

//Cek Data dari ID
const findAllRowsByID= async(req,res)=>{
    try {
  const result = await models.regions.findByPk(req.params.id,);
    return res.send({result, message:'status berhasil'})
        
    } catch (err) {
        return res.status(500)
        .send({error: err.name,
        message:err.message})   
    }
}

//Menambahkan Data
const createPegawai=async(req,res)=>{
    await models.regions.create({
        region_name:req.body.region_name
    }
    
    ).then(result=>{
        return res.send("Ok Berhasil\n + result")
    }).catch(err=>{
        return res.status(400).json(err.parent.detail)
    });
    // return res.send(result)
}

//Update Data
const updatePegawai=async(req,res)=>{
    
    try {
      const result = await req.context.models.regions.update({
          region_name:req.body.region_name
      },{
          returning:true,
          where: {region_id:req.params.id}
      })
    return res.send(result)
    
  } catch (err){
    return res.status(500)
    .send({error: err.name,
    message: err.message});
    
  }
}

//Delete Data
    const deletePegawai=async(req,res)=>{
    //var id
    const id =  req.params.id

    const result= await req.context.models.regions.destroy({
    where: {region_id:id} 
    })
    return res.send('Berhasil di delete')
    }

// //Join 2 tabel 
const cateRegions = async(req,res)=>{
    const result = await req.context.models.regions.findAll({ //pastikan ini pk
        include:[{
            model:req.context.models.countries, as:"countries" //ini foreign key
        }]
    });
    return res.send(result);
}

// const cateRegions = async(req,res)=>{
//     const result = await req.context.models.countries.findAll({
//         include:[{
//             model:req.context.models.regions, as:"regions"
//         }]
//     });
//     return res.send(result);
// }


export default{
    // findAllPegawai,
    // findAllRows,
    findAllRowsByID,
    createPegawai,
    cateRegions,
    updatePegawai,
    deletePegawai,
}