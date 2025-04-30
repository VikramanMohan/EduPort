import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Style from '../course.module.css'
const ViewCourse = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchSingleData = async (userId) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/courses/${userId}`);
      setSingleData(data);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const deleteData = async (deleteID) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${deleteID}`);
      console.log("Course deleted successfully");
      navigate("/course");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    fetchSingleData(id);
  }, [id]);

  useEffect(() => {
    console.log(singleData);
  }, [singleData]);

  return (
    <div className={Style.bg}>
      <section className={Style.edit}>
              <article>
              <div>
              <span>Course Name: <h2>{singleData.courseName}</h2></span>
              <span>Description: <p>{singleData.description}</p></span>
              <span>Price: <p>{"Rs."+singleData.price}</p></span>
              <span>Duration: <p>{singleData.duration+"days"}</p></span>
              <button>
                <NavLink to='/createCourse' state={singleData}>Update</NavLink>
              </button>
              <button onClick={() => deleteData(id)}>Delete</button>
              </div>
              </article>
            </section>
    </div>
  );
};

export default ViewCourse;
