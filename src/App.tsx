import React from 'react';
import logo from './assets/images/logo.svg'

import styles from './App.module.css'

import robots from './mockdata/robots.json'

import Robot from './components/Robot';

import ShoppingCart from './components/ShoppingCart';

interface Props { }

interface State {
  robotGallery: any[],
  count: number
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button onClick={() => {
          this.setState((preState,preProps)=>{
            return { count: preState.count + 1 };
          }, () => {
            console.log('count', this.state.count)
          });

          this.setState((preState,preProps)=>{
            return { count: preState.count + 1 };
          }, () => {
            console.log('count', this.state.count)
          });
          
          

        }}>count {this.state.count}</button>
        <ShoppingCart />
        <div className={styles.robotList}>
          {
            this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)
          }
        </div>
      </div>
    )
  }
}

export default App;
