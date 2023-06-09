import React from "react";

const Discount = () => {
  return (
    <section>
      <div className='bg-[url(/assets/discountBackground.png)] h-screen w-screen bg-no-repeat bg-bottom'>
        <div className='block relative top-32 left-60'>
          <h1 className='text-[#e63956] text-[150px] font-bold'>25%</h1>
          <h2 className='text-5xl text-[var(--primary-brown)] font-extrabold'>
            Discount
          </h2>
          <h2 className='text-9xl font-extrabold text-[#6cc5ac]'>on Tacosi</h2>
        </div>
      </div>
    </section>
  );
};

export default Discount;
