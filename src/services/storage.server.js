import { config } from "dotenv";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey : config.IMAGEKIT_PUBLIC_KEY,
    privateKey : config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : config.IMAGEKIT_URL_ENDPOINT
})

export async  function uploadFile(file,filename){
    return new Promise((resolve,reject)=>{
                imagekit.upload({
                    file: file.buffer,
                    filename: filename,
                    folder:"INSTA-CAM"
                },
            function(error,result){
                if(error){
                    reject(error)
        }else{
    resolve(result)
}
            })
    })
}