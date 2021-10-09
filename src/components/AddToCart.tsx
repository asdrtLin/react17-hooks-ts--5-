import React, { useContext } from 'react'

import { appSetStateContext } from '../AppState'

import {RobotProps} from './Robot'

interface RobotPropsA {
    id: number,
    name: string,
    email: string
}

//ChildComponent:React.ComponentType            react组件类型
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    return (props:RobotPropsA) => {
        const setState = useContext(appSetStateContext);
        const addToCart = (id: number, name: string) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        }
                    }
                }
                )
            }
        }
        return <ChildComponent  {...props} addToCart={addToCart} />
    }
}