import axios from "axios"

// craete a common function 

export const commonRequest=async (method,url,body)=>{


    // request configuration

    let reqConfig={

        method,
        // 
        url,
       data:body,
        headers:{

            "content-type":"application/json"
        }


    }

    // create axios instance

   return await axios(reqConfig).then((response)=>{
        return response
    }).catch((err)=>{
       
        return err

    })

}