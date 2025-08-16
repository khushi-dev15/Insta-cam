import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { findOneUser } from "../dao/user.dao.js";

export async function authMiddleware(req,res,next) {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorized access,please login first"
        })
    }
    try{
        const decoded = jwt.verify(token,config.JWT_SECRET)
        const user = findOneUser({__id:decoded.__id})
        req.user = user
        next()
    }catch(err){
        return res.status(401).json({
            message:"invalid login please check"
        })
    }
}