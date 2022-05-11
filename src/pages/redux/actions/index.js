import { getProduct, getProductById} from "../../../services"

export const actions = {
    productSetAll : "@product/setAll",
    productSetInfoById : "@product/setById"
}

export const productSetAll = (data)=>({
    type : actions.productSetAll,
    payload:data
})

export const setProductInfo = (data)=>({
    type: actions.setProductInfosetById,
    payload :data

})




export const setProductThunk =()=>{
    return dispatch =>{
            getProduct()
                .then((res)=>{
                    return dispatch(productSetAll(res))
                })

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