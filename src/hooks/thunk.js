
const getProducts=(url)=>{
return (dispatch)=>{
    axios.get(url)
    .then(res=>{
        dispatch({action:"fetchProducts",payload:res.data})
    })
}
}



const getProducts2=(url,dispatch)=>{
    axios.get(url)
    .then(res=>{
        dispatch({action:"fetchProducts",payload:res.data})
    })
}



getProducts("/products",dispatch);