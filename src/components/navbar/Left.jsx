import { FaBookBookmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Style from "./nav.module.css"
const Left = () => {
  return (
    <>
        <NavLink className={Style.logo}><FaBookBookmark /><h1>Eduport</h1></NavLink>
    </>
  )
}

export default Left