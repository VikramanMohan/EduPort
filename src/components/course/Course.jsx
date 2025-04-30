import axios from "axios";
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Style from "./course.module.css"; // Use camelCase for CSS modules

const Course = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const navigate = useNavigate();

  const viewCourse = (id) => {
    navigate(`/viewCourse/${id}`);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/courses");
      setCourseDetails(data);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
   
      <div className={Style.page}>
      <section className={Style.card}>
        
          {courseDetails.length > 0 ? (
            courseDetails.map(({ id, courseName, description , price, duration}) => (
              <div key={id}>
                <span>Course Name: <h2> { courseName}</h2></span> 
                <span>Description:<p>  {description}</p></span> 
                <span>Price: <p>{"Rs."+price}</p></span>
                <span>Duration: <p>{duration+"days"}</p></span>
                <aside>
                <button onClick={() => viewCourse(id)}>View more ...</button>
                </aside>
              </div>
            ))
          ) : (
            <p>Loading courses...</p>
          )}
        
      </section>

      <div className={Style.addcourse}>
        <article>
          <div className={Style.button}>
            <NavLink to="/createCourse" >
                <GoPlus className={Style.icon}/>
            </NavLink >
          </div>
        </article>
      </div>
      </div>
      
    
  );
};

export default Course;
