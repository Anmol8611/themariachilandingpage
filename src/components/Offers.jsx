import React from "react";
import Button from "./Button";

const Offers = () => {
  return (
    <section className='text-[--secondary-cream] bg-[--primary-brown] flex justify-around h-screen items-center'>
      <div>
        <h2 className="text-5xl font-extrabold mb-10">See Our Offers</h2>
        <p className="text-2xl max-w-xl mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, exercitationem natus molestias doloremque cum.</p>
        <div className="text-[--primary-brown]">
            <Button text={`See Offers`} bg={`--secondary-cream`}/>
        </div>
      </div>
      <div>
        <img src="/assets/offerThali.png" alt="thali picture" />
      </div>
    </section>
  );
};

export default Offers;
