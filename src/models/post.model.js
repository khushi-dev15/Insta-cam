import mongoose from "mongoose";
import mongoose1 from "mongoose";

const postSchema = new mongoose.postSchema({
    Image:{
        type:String,
        require:true
    },
    Caption:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    mentions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }]
},{
    timestamps:true
})

const post = mongoose.model("post",postSchema)
export default post;