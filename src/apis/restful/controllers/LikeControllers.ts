import { NextApiRequest, NextApiResponse } from 'next';
import Response from "apis/utils/helpers/response";
import LikeServices from 'apis/services/likeServices';

export default class LikeControllers{

    static async likeAndUnlike(req: NextApiRequest,res: NextApiResponse){
       try {
        // const post=127;
        // const user=781;
        const {user,post} = req.body;
        const isUserLikedBlog = await LikeServices.findOneByCondition({user,post});
        const isBlogLikedBefore = await LikeServices.findOneByCondition({user,post,likes:true});

        if(!isUserLikedBlog){
            await LikeServices.create({
                user,post,likes:true
            })
        }else if(isBlogLikedBefore){
            await LikeServices.update({likes:false},{
                user,post
            })
        }else{
            await LikeServices.update({likes:true},{
                user,post
            })
        }

        await LikeServices.findAllByCondition({
            post,likes:true
        }).then((resp)=>{
            return Response.success(res,201,{
                message:"blog likes status",
                data:resp
            })
        }).catch((error:any)=>{
            return Response.error(res,403,{
                message:'unable to make like or unlike',
                error: error.message
            })
        })
       } catch (error:any) {
            return Response.error(res,403,{
                message:'server error',
                error: error.message
            })
       }

    }

}