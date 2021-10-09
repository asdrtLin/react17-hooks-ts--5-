import React, { Component } from 'react'

import styles from './ShoppingCart.module.css'

import { FiShoppingCart } from 'react-icons/fi'

interface State {
    isOpen: boolean
}

interface Props {

}

class ShoppingCart extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        console.log('e.target',e.target)
        console.log('e.currentTarget',e.currentTarget)

        if((e.target as HTMLElement).nodeName==='SPAN'){

            this.setState({ isOpen: !this.state.isOpen })
            
        }
        
    }
    render() {
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                    <span>购物车2（件）</span>
                </button>
                <div
                    style={{ display: this.state.isOpen ? "block" : "none" }}
                    className={styles.cartDropDown}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;