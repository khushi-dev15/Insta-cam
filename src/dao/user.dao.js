import usermodel from "../models/auth.model.js";

export async function createUser(data){
    return await usermodel.create(data);
}
export async function findOneUser(query){
    return await usermodel.findOne(query);
}
export default createUser;
