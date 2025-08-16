import {body,validationResult,validatorResult} from "express-validator";
import mongoose from "mongoose";


export const registerValidator = [
    body("username")
      .notEmpty()
      .withMessage("username is required")
      .isLength({min:3 , max:20})
      .withMessage("username must be between 3 to 20 characters"),
    body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("Email is not valid"),
    body("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({min : 6 , max : 15})
        .withMessage("password must be between 6 to 15"),
    (req,res,next) =>{
        const errors = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()});
        }
        next();
    }
]