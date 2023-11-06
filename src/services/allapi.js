import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonreq";

// add video
export const addVideo=async(body)=>{

    return await commonRequest("POST",`${BASE_URL}/videos`,body)


}

// get videos

export const getVideo=async()=>{

  return await commonRequest("GET",`${BASE_URL}/videos`,"")



}


// delete videos

 export const deleteVideo=async(id)=>{

 return await  commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})


}

// Add category

export const addCategory=async(body)=>{

 return await commonRequest("POST",`${BASE_URL}/categories`,body)
}


//get all categories

export const getallCategories=async()=>{
  return await commonRequest("GET",`${BASE_URL}/categories`,"")
}


//delete category

export const deleteCategory=async(id)=>{
return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})

}

// get history

export const gethistory=async()=>{
  return await commonRequest("GET",`${BASE_URL}/watchhistory`,"")
}



// add history

export const addHistory=async(body)=>{

  return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
 }



 // get single videos

export const getvideo=async(id)=>{

  return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")



}



// update category

export const updateCategory = async (id,body)=>{
  return await commonRequest("PUT",`${BASE_URL}/categories/${id}` ,body )
}

 

