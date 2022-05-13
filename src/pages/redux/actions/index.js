import { getFilterCategories, getProducts, getProductById, getFilterProducts} from "../../../services"

export const actions = {
    productSetAll : "@product/setAll",
    productSetInfoById : "@product/setById",
    categoriesSetValues: "@categories/setValue"
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







export const setProductThunk =(category)=>{
    return (dispatch) =>{
        if(!category ){
            getProducts()
            .then((res)=>{
                 dispatch(productSetAll(res))
                
            })
        }else if(category){
            getFilterProducts(category)
                .then((rest)=>{
                     dispatch(productSetAll(rest))
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

