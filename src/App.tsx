import React , { useEffect, useState } from 'react';
import logo from './assets/images/logo.svg'

import styles from './App.module.css'

import robots from './mockdata/robots.json'

import Robot from './components/Robot';

import ShoppingCart from './components/ShoppingCart';


const App : React.FC = (props)=>{

  const [count , setCount]=useState<number>(0)

  const [robotGallery,setRobotGallery] = useState<any>([]);

  const [loading,setLoading]= useState<boolean>(false)

  const [error,setError] = useState<string>()

  useEffect(()=>{
    document.title=`点击${count}次`
  },[count])

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true)

      try{
        const responses = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await responses.json()
        setRobotGallery(data)  
      }catch(e){
        if(e instanceof Error){
          setError(e.message)
        }
      }
      setLoading(false)
    }
    fetchData();
  },[])

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button onClick={() => {
          setCount(count+1)
        }}>count {count}</button>
        {(!error || error !=='') && <div>网站出错：{error}</div> }
        <ShoppingCart />
        {
          !loading?
          <div className={styles.robotList}>
          {
            robotGallery.map((r:any) => <Robot id={r.id} name={r.name} email={r.email} />)
          }
        </div>
        :<h2>loading 加载中</h2>
        }
      </div>
    )
  
}

export default App;
