import React from 'react'


const CartTable = ({info}) => {
  


   // const coustTotalForUnd = ((info.quantity)*(info.product.price));
    //console.log(coustTotalForUnd); 

    const infoShoping = info.map((info) => 
    {
    return (
        <tr key={info.id}>
             <th scope="row">{info.id}</th>
             <td>{info.product.name}</td>
             <td>{"$"+ info.product.price}</td>
             <td>{info.quantity}</td>
             <td>{"$"+ ((info.product.price)*(info.quantity)).toFixed(2)}</td>
             <td>
              <button type="button" className="btn btn-danger">Deleted</button>
             </td>
        </tr>

    )    
    })

    return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">PRODUCT</th>
                    <th scope="col">COST UND</th>
                    <th scope="col">COUNT</th>
                    <th scope="col">COUST TOTAL</th>
                    <th scope="col">DELET</th>
                </tr>
            </thead>
            <tbody>
                {infoShoping}
                <tr>
                    <td colSpan="6"></td>
                </tr>
                <tr>
                    <td colSpan="4">ALL PURCHASE</td>
                    <td colSpan="2">$2584100</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default CartTable