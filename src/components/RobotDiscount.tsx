import React, { useContext } from 'react'

import styles from './Robot.module.css'

import { appContext, appSetStateContext } from '../AppState'

import { useAddToCart } from './AddToCart'

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email}) => {//使用hook
    const value = useContext(appContext)
    const addToCart=useAddToCart();
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h3>打折商品</h3>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={() => addToCart(id, name)}>加入购物车</button>
        </li>
    )
}

export default RobotDiscount;