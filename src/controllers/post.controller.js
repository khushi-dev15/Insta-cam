import { uploadFile } from "../services/storage.server.js";

import { promise } from "bcrypt/promises.js";
import {createPost,getPost} from "../dao/post.dao.js";


export async function createPostController(req,res){
    const {mention} = req.body

    const [file,caption] = await promise.all([
        uploadFile(req.file, uuidv4()),
        generateCaption(req.file)
    ])
     const post = await createPost({
    mention,
     url: file.url,
     caption,
    user: req.user._id
    })
    res.status(201).json({
        message:"post  craeetd successfully",
        post
    })
}