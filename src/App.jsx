import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <section>
        <div>
        <Navbar/>
        </div>
        <article>
          <Outlet/>
        </article>
    </section>
  )
}

export default App