import { forwardRef, useEffect, useReducer, useState } from "react";

let EachProduct =  forwardRef( (props) => {
    let [productDetail, setproductDetail] = useState();
    let quantityContext = createContext();

    let quality = useContext(quantityContext)

    let [ value , dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.product.productId}`,).then( (res, err) => {
            setproductDetail(res.products)
        })
      }, [])

    return(
        <quantityContext.provider value={quality}>
        <li key={props.index}>
        {productDetail?.title}
        {productDetail?.price}
        {productDetail.description}
        {productDetail.title}
      </li>
        </quantityContext.provider>

    )

})

export default EachProduct;