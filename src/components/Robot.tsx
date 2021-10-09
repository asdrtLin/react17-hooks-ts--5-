import React from 'react'

import styles from './Robot.module.css'

interface RobotProps {
    id:Number,
    name:String,
    email:String
}

const Robot : React.FC<RobotProps> = ({ id, name, email }) => {

    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2> 
            <p>{email}</p>
        </li>
    )
}

export default Robot;