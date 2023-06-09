import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <section className="flex justify-evenly py-28 text-[--primary-brown]">
      <div>
        <img src='/assets/aboutCard.png' alt='about food' />
      </div>
      <div className="flex flex-col items-start mt-20">
        <h2 className="text-5xl font-semibold mt-20 mb-10">About Mariachi</h2>
        <p className="text-2xl font-medium max-w-2xl mb-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id animi modi excepturi nemo? Voluptate, blanditiis.</p>
        <div className="text-[var(--font-cream)]">
            <Button text={`Tell Me More`} bg={`--primary-brown`}/>
        </div>
      </div>
    </section>
  );
};

export default About;
