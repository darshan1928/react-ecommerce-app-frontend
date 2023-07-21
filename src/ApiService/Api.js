import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export const getAllProducts=async()=>{
    const response = await instance.get("/products")

    return response.data
    
}


export const getProductId=async(id)=>{
    const response = await instance.get(`/products/${id}`)
    return response.data
}

export const getProductImage=async(id)=>{
    const response = await instance.get(`/products/${id}/image`)
    return response.data
}


