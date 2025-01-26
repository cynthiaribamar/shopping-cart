import './globals.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { ProductActionTypes } from './redux/products/action-types';
import { Item } from './components/item';
import { Header } from './components/header';


function App() {
  const dispatch = useDispatch();

  const getAllItems = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET"
      })

      dispatch({
        type: ProductActionTypes.SAVE_PRODUCTS,
        payload: await data.json()
      });

    } catch (err) {
      console.log(err)
    }
  }

  const getAllCategories = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/categories", {
        method: "GET"
      })

      dispatch({
        type: ProductActionTypes.SAVE_CATEGORIES,
        payload: await data.json()
      });

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, [])

  const { products } = useSelector(rootReducer => rootReducer.productsReducer);

  return (
    <div className="App">
      <Header />
        <section>
          <ul>
            {
              products.map((item, index) => {
                return (
                  <Item product={item} />
                )
              })
            }
          </ul>
        </section>
    </div>
  );
}

export default App;
