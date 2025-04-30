import { NavLink } from 'react-router-dom'
import Style from './register.module.css'
const Register = () => {
  return (
    <>
    <section className={Style.register}>
      <form action="">
      <h1>Register</h1>
        <article>
          <label htmlFor="">Name</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Email</label><input type="text" />
        </article>
        <article>
          <label htmlFor="">Contact</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Confirm Password</label>
          <input type="text" />
        </article>
        <article>
          <button>Register</button>
        </article>
        <article>
          <span>Already an account? <NavLink to='/login'>Login</NavLink> </span>
        </article>
      </form>
    </section>
    </>
  )
}

export default Register