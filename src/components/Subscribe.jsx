import React from "react";
import Button from "./Button";

const Subscribe = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 text-[--primary-brown] h-screen">
      <h2 className="text-7xl font-bold">Get Our Latest Offers</h2>
      <p className="text-3xl font-medium max-w-7xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quis
        repudiandae saepe aspernatur voluptatem officiis?
      </p>
      <div className="flex items-center justify-center">
        <input className="py-3 px-20 rounded-3xl bg-[--primary-brown] placeholder-[--font-cream]" type='email' placeholder='Your Email' />
        <div className="text-[--secondary-cream]">
          <Button text={`SUBSCRIBE`} bg={`--primary-brown`} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
