import Style from './home.module.css';
import { FaPlay } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Home = () => {
  return (
    <div className={Style.home}>
      <article className={Style.textContent}>
        <h1>Limitless learning at <br /> your fingertips</h1>
        <p>
          Online learning and teaching marketplace with 5k+ courses & 10M students.
          Taught by experts to help you acquire new skills.
        </p>
        <div className={Style.features}>
          <span><MdVerified /> Learn with experts</span>
          <span><MdVerified /> Get certified</span>
          <span><MdVerified /> Get Membership</span>
        </div>
        <div className={Style.actions}>
          <button>Get Started</button>
          <div className={Style.play}><FaPlay /></div>
          <span>Watch video</span>
        </div>
      </article>
      <article className={Style.imageContent}>
        <img src="/IMG_20220928_212733_553.jpg" alt="Learning" />
      </article>
    </div>
  );
};

export default Home;