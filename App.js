import React, { useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Spinner from "./components/pic.gif"

function App() {

  const [users,setusers] = useState(undefined);
  const [isClick,setClick] = useState(false);

  useEffect(() => {
    if(isClick)
    { 
      setTimeout(function(){
      fetch("https://reqres.in/api/users?page=1",{ method:"get"}).then(res=>res.json()).then(result=>{
        setusers(result.data);    
    })
     }, 500);  
    }   
  },[isClick]);

  
 const fetchUsers=(res)=>{
   setClick(res);
 }
 const loader=(result)=>{
  if(result){
    return ( <img className="spinner"
    src={Spinner}
    alt="loading..."
  />)    
  }     
}
  return (
    <> 
    <div className="App">
     <Navbar handleClick={fetchUsers} />
     {users ? 
     <div className="container">
     {users.map((user)=>{
       return <Card key={user.id} lname={user.first_name} fname={user.last_name} email={user.email} avatar={user.avatar}/>
     })}
     </div>
      : loader(isClick)}
    </div>
    </>
  );
}

export default App;