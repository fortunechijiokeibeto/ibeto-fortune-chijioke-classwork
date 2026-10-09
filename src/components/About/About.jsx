import React from "react";
import "./About.css";
import fourthpic from "../../assets/fourthpic.JPG";

const About = () => {
  return (
    <div>
      {/* <!-- ABOUT SECTION --> */}
      <section className="about">
        <div className="about-text">
          <h3>Meet The Owner</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi,
            iure veritatis esse dolores dolore aut vitae deleniti suscipit.
            Dolorem sunt totam id similique quidem!
          </p>
          <button>Know More</button>
        </div>
        <div className="img">
          <img src={fourthpic} alt="fourthpic" />
        </div>
      </section>
    </div>
  );
};

export default About;
