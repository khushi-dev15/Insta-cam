import usermodel from "../models/auth.model.js";
import { createUser,findOneUser } from "../dao/user.dao.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config  from "../config/config.js";


export async function registerController(req,res){
    const {username,email,password} = req.body;
    const isUserExist = await findOneUser({
        $or:[
            {
                username
            },
            {
                password
            },
            {
                email
            }
        ]
    })
    if(isUserExist){
        return res.status(400).json({
            message:"user already exist"
        })
    }
    const hashedpassword  = await bcrypt.hash(password,10)

    const user = await createUser({
        username:username,
        email:email,
        password:hashedpassword
    })

    const token = jwt.sign({_id:user._id},config.JWT_SECRET)
    res.cookie("token",token)

    return res.status(201).json({
        message:"registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            bio:user.bio,
            image:user.image
        }
    })
}

export async function logincontroller(req,res){
    const {username,password} = req.body;
    const user = await findOneUser({
        $or:[
            {username},
            {password}
        ]
    })
    if(!user){
        return res.status(400).json({
            message:"unauthorized credential"
        })
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"invalid credential"
        })
    }
    const token = jwt.sign({_id:user._id},config.JWT_SECRET)
    res.cookie("token",token)

    return res.status(200).json({
        message:"logedin successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            bio:user.bio,
            image:user.image
        }
    })
}