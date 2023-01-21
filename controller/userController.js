//user
import models,{ Sequelize, sequelize } from "../models/init-models";
import bcrypt from "bcrypt";

const getUser=async(req,res)=>{
    const result =await sequelize.query('select*from users',{
        type:sequelize.QueryTypes.select,
        model:sequelize.models.users,
        mapToModel:true,
    });
    return res.status (200).json(result);
}


const CreateUsers = async (req, res)=>{
    // const salt = await bcrypt.genSalt(10)
    const salt = await bcrypt.genSalt(10);
    const passHash =await bcrypt.hash(req.body.password, salt)
    await models.users.create({
        user_name: req.body.user_name,
        password: passHash
    }).then(result=>{
        return res.send('berhasil\n'+ result)
    }).catch(err=>{
        return res.send('gagal\n'+ err)
    })
}

// const findUserByUsername = async (callback, user_name)=>{
//   const result = await models.users.findAll({
//         where:{username:user_name}
//     })
//     callback(result)
// }
// cara ke 2'

const findUserByUsername = async (user_name)=>{
    const result = await models.users.findOne({
        where:{user_name: user_name}
    }).catch(err=>{
        return err
    })
    return result.toJSON()
}

// const findUserByUsername = async (username)=>{
//     await models.users.findOne({
//         where:{username:username}
//     }).then(result=>{
//         return result.toJSON()
//     })
// }

const editProfil = async (req,res)=>{
    await models.users.update({
        // nama field
    },{
        where:{users:req.params.id}
    }).then(result=>{
        return req.send('ok')
    }).catch(err=>{
        return req.send(err+message)
    })
}


export default{
    CreateUsers,
    findUserByUsername,editProfil,
    getUser
}