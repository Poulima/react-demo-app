import { useEffect, useRef, useState } from "react";


function App() {
  let [productList, setProductList] = useState([]);

  let myRef = useRef();


  useEffect(() => {
    axios.get('https://fakestoreapi.com/carts/2',).then( (res, err) => {
      setProductList(res.products)
    })
  }, [])
  return (
    <div>
     <ul ref={myRef}>
      {productList.map((product, index) => {
        <EachProduct product={product} key={index} ref={myRef}/>
      })}
     </ul>
    </div>
  );
}

export default App;
