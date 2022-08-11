import { NextApiRequest, NextApiResponse } from 'next';
import Response from "apis/utils/helpers/response";
import LibraryServices from 'apis/services/libraryServices';



export default class LibraryControllers{

    static async create(req: NextApiRequest,res: NextApiResponse){
       try {
        const data=req.body;
        await LibraryServices.create(data).then((resp)=>{
            return Response.success(res,201,{
                message:"library get new Item",
                data:resp
            })
        }).catch((error:any)=>{
            return Response.error(res,403,{
                message:"item failed to be inserted in library",
                error:error.message
            })
        })
       } catch (error:any) {
            return Response.error(res,403,{
                message:'server error',
                error: error.message
            })
       }

    }

    static async getAllItems(req: NextApiRequest, res: NextApiResponse){
        try{
            await LibraryServices.findAll().then((resp)=>{
                if(!resp){
                    return Response.error(res,404,{
                        message:"there is no book in library"
                    })
                }
                return Response.success(res,200,{
                    message:'books received successfully',
                    data:resp
                })
            }).catch((error)=>{
                return Response.error(res,403,{
                    message:"books failed to be retreived",
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

    static async getOneItem(req: NextApiRequest, res: NextApiResponse){
        try{
            const { itemId }=req.query;
            await LibraryServices.findByPk( itemId ).then((resp)=>{
                if(!resp){
                    return Response.error(res,404,{
                        message:"this book is not in library"
                    })
                }
                return Response.success(res,200,{
                    message:'book received successfully',
                    data:resp
                })
            }).catch((error)=>{
                return Response.error(res,403,{
                    message:"book failed to be retreived",
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