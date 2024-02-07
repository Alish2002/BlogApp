import React,{useState} from 'react';

const Login=()=>{
    const [user, setUser]= useState({
        userNname:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({
            ...user,
            [name]:value
        });
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const response= await fetch('http://localhost:5000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
        
                },
                body:JSON.stringify(user)
            });
            const data=await response.json();
            console.log(data);
        }
        catch(error){
            console.error(error)
        }
    }
    
    return(
        <div>
            <div>Login:</div>
            <form>
                <label>name:</label>
                <input
                type='text'
                name='userName'
                value={user.userName}
                onChange={(e)=>handleChange(e)}
                ></input>
                <label>email:</label>
                <input
                type='text'
                name='email'
                value={user.email}
                onChange={(e)=>handleChange(e)}
                ></input>
                <label >password:</label>
                <input
                type='text'
                name='password'
                value={user.password}
                onChange={(e)=>handleChange(e)}
                ></input>
                <button type='submit'  onClick={(e)=>{handleSubmit(e)}} >Login</button> 
            </form>
        </div>
    )
}
export default Login;