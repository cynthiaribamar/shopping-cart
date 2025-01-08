import './globals.scss';
import { Item } from './components/item';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

function App() {

  const { products } = useSelector(rootReducer => rootReducer.productsReducer);

  const dispatch = useDispatch();

  const getAllItems = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET"
      })

      dispatch({
        type: "products/save",
        payload: await data.json()
      });

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllItems();
  }, [])

  console.log("products", products)

  return (
    <div className="App">
      {
        products.map((item, index) => {
          while(index < 5){
            return (
              <Item product={item}/>
            )  
          }
        })
      }
    </div>
  );
}

export default App;
