import { getFilterCategories, getProducts, getProductById, getFilterProducts, getProductsFromCart, deleteProductFromCart} from "../../../services"

export const actions = {
    productSetAll : "@product/setAll",
    productSetInfoById : "@product/setById",
    categoriesSetValues: "@categories/setValue",
    carSetProducts: "@car/setProducts"
}

export const productSetAll = (data)=>({
    type : actions.productSetAll,
    payload:data
})

export const setProductInfo = (data)=>({
    type: actions.productSetInfoById,
    payload :data

})

export const setCategories = (data)=>({

    type: actions.categoriesSetValues,
    payload:data
})

export const setProductsToCart = (data)=>({

    type: actions.carSetProducts,
    payload:data
})




export const setProductThunk =(category)=>{
    return (dispatch) =>{
        if(category){
            getFilterProducts(category)
            .then((rest)=>{
                 dispatch(productSetAll(rest))
            })
        }else{
            getProducts()
            .then((res)=>{
                 dispatch(productSetAll(res))       
            })
        }   
    }
}





export const setInfoProductThunk = (id)=>{
    return (dispatch)=>{
        getProductById(id)
            .then((res)=>{
                dispatch(setProductInfo(res))
            })
        
    }
}


export const setCategoriesThunk = ()=>{
    return (dispatch)=>{
        getFilterCategories()
            .then((res)=>{

                dispatch(setCategories(res))
            })
        
    }
}


export const setCarProductsThunk = ()=>{
    return (dispatch)=>{
        getProductsFromCart()
            .then((res)=>{
                dispatch(setProductsToCart(res))
            })
    }
}



export const deleteProductsCartThunk = (id)=>{
    return (dispatch)=>{
        deleteProductFromCart(id)
            .then(()=>{
                dispatch(setCarProductsThunk())
            })

    }
}