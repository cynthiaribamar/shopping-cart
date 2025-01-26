import style from './style.module.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartActionTypes } from '../../redux/cart/action-types';

export const Item = ({ product, variant }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(rootReducer => rootReducer.cartReducer);

    const [qt, setQt] = useState(0);

    const {
        id,
        description,
        price,
        image,
        title,
        category,
        hidden
    } = product;

    useEffect(() => {
        const product = cart?.find((item) => item.id == id);

        if (product) {
            setQt(product.quantity)
        }

    }, [cart])

    const addToCart = () => {
        dispatch({
            type: CartActionTypes.ADD_PRODUCT,
            payload: {
                id: id,
                title: title,
                price: Number(price),
                quantity: 1
            }
        })
    }

    return (
        <li className={style.item} data-hidden={hidden} data-variant={variant}>
            <div className={style.imgWrapper}>
                <img src={image} className={style.productImg} />
            </div>
            <div className={style.content}>
                <span className={style.category}>{category}</span>
                <h2>{title}</h2>
                <span>{`$${price}`}</span>
                {
                    variant === "cart" ?
                        <div className={style.controller}>
                            <button className={style.btn}>-</button>
                            <span>{qt}</span>
                            <button className={style.btn} onClick={addToCart}>+</button>
                        </div>
                        :
                        <button className={style.btn}>add</button>
                }
            </div>
        </li>
    )
}