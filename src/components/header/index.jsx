import style from './style.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductActionTypes } from '../../redux/products/action-types';

export const Header = () => {
    const { categories } = useSelector(rootReducer => rootReducer.productsReducer);

    const dispatch = useDispatch();

    const filter = (val) => {

        dispatch({
            type: ProductActionTypes.FILTER_PRODUCTS,
            payload: val
        })
    }

    return (
        <header className={style.header}>
            <select onChange={(e) => filter(e.target.value)}>
                <option value="">select category</option>
                {categories.map((categorie) => {
                    return (
                        <option value={categorie}>{categorie}</option>
                    )
                })}
            </select>
            {/* <img src="/cart.png" alt="" className={style.cartIcon} /> */}
        </header >
    )
}