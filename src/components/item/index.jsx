import style from './style.module.scss'

export const Item = ({ product }) => {

    const {
        description,
        price,
        image,
        title
    } = product

    return (
        <li className={style.item}>
            {title}
        </li>
    )
}