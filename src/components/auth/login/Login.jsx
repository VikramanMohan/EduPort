
import { useState } from 'react'
import Style from './login.module.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
  let [details,setDetails]=useState({
    email:"",
    password:"",
  })

  let {email,password}= details;

  let handleChange = (e) => {
    let {name,value} = e.target
    setDetails({
        ...details,[name]:value
    })
}


let handleSubmit = (e) => {
  e.preventDefault();
  console.log(details);
 
}
  return (
    <>
    <section className={Style.login}>
      <form action="" onSubmit={handleSubmit}>
      <h1>Login</h1>
        <article>
          <label htmlFor="" onChange={handleChange} name="email" value={email}>Email</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="" onChange={handleChange} name="password" value={password}>Password</label>
          <input type="text" />
        </article>
        <article>
          <button>Submit</button>
        </article>
        <article>
          <span>Create an account? <NavLink to='/register'> Register</NavLink></span>
        </article>
      </form>
    </section>
    </>
  )
}

export default Login