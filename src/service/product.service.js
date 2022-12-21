import http from "../httpcommun";
import {successNotification} from "../helper/notifications"
import {errorNotification} from "../helper/notifications"


export const createProduct=({title,price,description,category,quantity,rating,image})=>{
    //send as form data
    var formData =new FormData();
    formData.append("title",title)
    formData.append("price",price)
    formData.append("description",description)
    formData.append("category",category)
    formData.append("quantity",quantity)
    formData.append("rating",rating)
    formData.append("image",image[0])
    http.post("/product",formData,{
        headers:{
            "Content-Type":"multipart/form-data",
        },
    }).then(res=>{
        if(res){
            successNotification("Product Added");
            setTimeout(()=>{
                window.location="/admin/products";
            },3000)
        }
    }).catch((err) => {
      console.log(err.response.data);
      errorNotification(err.response.data);
    });
}


export const deleteProduct=(id)=>{
    http.delete(`/product/${id}`).then(res=>{
        if(res){
            successNotification("Product deleted");
            setTimeout(()=>{
                window.location="/admin/products";
            },3000)
        }
    }).catch((err) => {
      console.log(err.response.data);
      errorNotification(err.response.data);
    });
}

export const editProduct=({id,title,price,description,category,quantity,rating,image})=>{
    let formData =new FormData();
    formData.append("title",title)
    formData.append("price",price)
    formData.append("description",description)
    formData.append("category",category)
    formData.append("quantity",quantity)
    formData.append("rating",rating)
    formData.append("image",image ? image[0] : null);
    http.put(`/product/${id}`,formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(res=>{
        if(res.status===200){
            successNotification("Product updated succesfully");
            setTimeout(()=>{
                window.location="/admin/products"
            },3000);
        }
    }).catch((err) => {
      console.log(err.response.data);
      errorNotification(err.response.data);
    });
}