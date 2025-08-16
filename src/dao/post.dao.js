import postModel from "../models/post.model.js";

export async function createPost(data){

    const {mention, caption, url, user} = data;
    return await postModel.create({
      image:url,
      caption,
      user,
      mentions  
    })
}

export async function getPost(skip = 0, limit = 10){

  const post = await postModel
  .find()
  .sort({createdAt : -1})
  .skip(skip)
  .limit(limit)




  return post;
}