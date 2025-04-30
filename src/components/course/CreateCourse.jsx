import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./course.module.css"; // Use camelCase for CSS modules

const CreateCourse = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    courseName: state?.courseName || "",
    description: state?.description || "",
    price: state?.price || 0,
    duration: state?.duration || "",
  });

  const { courseName, description, price, duration } = details;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payLoad = { ...details };

    try {
      if (state) {
        await axios.put(`http://localhost:3000/courses/${state.id}`, payLoad);
      } else {
        await axios.post("http://localhost:3000/courses", payLoad);
      }

      // Reset form
      setDetails({ courseName: "", description: "", price: 0, duration: "" });

      // Navigate back to courses list
      navigate("/course");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <section className={styles.course}>
      <form onSubmit={handleSubmit}>
        <h1>Course Details</h1>
        <article>
          <label htmlFor="courseName">Course Name</label>
          <input type="text" id="courseName" name="courseName" value={courseName} onChange={handleChange} />
        </article>

        <article>
          <label htmlFor="description">Course Description</label>
          <input type="text" id="description" name="description" value={description} onChange={handleChange} />
        </article>

        <article>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={price} onChange={handleChange} />
        </article>

        <article>
          <label htmlFor="duration">Duration</label>
          <input type="text" id="duration" name="duration" value={duration} onChange={handleChange} />
        </article>

        <article>
          <button type="submit">{state ? "Update Course" : "Add Course"}</button>
        </article>
      </form>
    </section>
  );
};

export default CreateCourse;
