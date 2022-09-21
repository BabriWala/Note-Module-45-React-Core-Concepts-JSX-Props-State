import Count from "./components/Count";
import ExternalUser from "./components/ExternalUser";
import Product from "./components/Product";

const products = [
  {name: 'laptop', price: 20000},
  {name: 'phone', price: 50005},
  {name: 'watch', price: 25000},
  {name: 'MoneyBag', price: 5000},
  {name: 'Shirt', price: 35000},
  {name: 'Mobile', price: 5000}
]


function App() {
  return (
    <div>
      
      {/* <Count></Count> */}

      <ExternalUser></ExternalUser>


      {/* <Product name={product[0]}></Product>
      <Product name={product[1]}></Product>
      <Product name={product[2]}></Product>
      <Product name={product[3]}></Product>
      <Product name={product[4]}></Product>
      <Product name={product[5]}></Product> */}
      {/* {
        products.map(product => <Product product={product} ></Product>)
      } */}
    </div>
  );
}

export default App;
