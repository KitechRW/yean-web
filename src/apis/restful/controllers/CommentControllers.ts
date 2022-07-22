import CommentServices from "../../services/commentServices";
import ArticleServices from "../../services/articleServices";
import { NextApiRequest, NextApiResponse } from 'next';
import Response from "apis/utils/helpers/response";


export default class CommentControllers{

    static async create(req: NextApiRequest, res: NextApiResponse){
        try {
            const {username,comment,article_id} = req.body;
            await ArticleServices.findByPk(article_id).then(async(resp)=>{
                if(!resp){
                    return Response.error(res,404,{
                        message:"this article is not in the system",
                    })
                }
                await CommentServices.create({article_id,username,comment}).then((rslt)=>{
                    return Response.success(res,200,{
                        message:"comment saved successfull",
                        data:rslt
                    })
                }).catch((error)=>{
                    return Response.error(res,403,{
                        message:"comment fail to be saved",
                        error:error.message
                    })
                })
            }).catch((error)=>{
                return Response.error(res,500,{
                    message:"server error",
                    error:error.message
                })
            })
        } catch (error) {
            
        }
    }

    static async getAllCommentsOfPost(req: NextApiRequest, res: NextApiResponse){
        try{
            const {article_id} = req.query;
            await CommentServices.findAllByCondition({article_id}).then((resp)=>{
                if(!resp){
                    return Response.error(res,404,{
                        message:"there is no comments on this article"
                    })
                }
                return Response.success(res,201,{
                    message:'comments received successfully',
                    data:resp
                })
            }).catch((error)=>{
                return Response.error(res,403,{
                    message:"comments failed to be retreived",
                    error:error.message
                })
            })

        }catch(error:any){
            return Response.error(res,500,{
                message:"server error",
                error:error.message
            })
        }
    }

    static async getAllComments(req: NextApiRequest, res: NextApiResponse){
        try{
            await CommentServices.findAll().then((resp)=>{
                if(!resp){
                    return Response.error(res,404,{
                        message:"there is no comments"
                    })
                }
                return Response.success(res,201,{
                    message:'comments received successfully',
                    data:resp
                })
            }).catch((error)=>{
                return Response.error(res,403,{
                    message:"comments failed to be retreived",
                    error:error.message
                })
            })

        }catch(error:any){
            return Response.error(res,500,{
                message:"server error",
                error:error.message
            })
        }
    }

}
