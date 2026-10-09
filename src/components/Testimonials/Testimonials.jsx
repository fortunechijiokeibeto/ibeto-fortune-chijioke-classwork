import React from 'react'
import "./Testimonials.css";
import firstpic from "../../assets/firstpic.jpg";

const Testimonials = () => {
  return (
    <div>
       {/* <!-- TESTIMONIALS --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students say</h2>
        <div className="testimonials-container">
          <div className="card">
            <img src={firstpic} alt="firstpic" />

            <h3>Modester Onyema</h3>
            <p>
              This academy completely changed my career. I learnt fullstack
              development from start to finish and got my first gig
            </p>
          </div>
          <div className="card">
            <img src={firstpic} alt="firstpic" />

            <h3>Adigun Faith</h3>
            <p>
              This academy completely changed my career. I learnt fullstack
              development from start to finish and got my first gig
            </p>
          </div>
          <div className="card">
            <img src={firstpic} alt="firstpic" />

            <h3>Nwoke Chinedu</h3>
            <p>
              This academy completely changed my career. I learnt fullstack
              development from start to finish and got my first gig
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
