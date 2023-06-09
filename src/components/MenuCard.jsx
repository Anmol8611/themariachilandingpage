import React from "react";
import Button from "./Button";

const MenuCard = () => {
  return (
    <section className="max-h-screen mb-10">
      <div className='flex flex-col items-center text-[var(--primary-brown)] py-5'>
        <h2 className='text-5xl font-semibold mt-20 mb-10'>
          Don't Miss our Menu
        </h2>
        <p className='text-2xl font-medium max-w-2xl text-center mb-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt
          adipisci corporis fugiat in ea.
        </p>
        <div className='text-[var(--secondary-cream)] mb-20'>
          <Button text={`See Menu`} bg={`--primary-brown`} />
        </div>
      </div>

      <div className='bg-[url(/assets/menuBanner.png)] bg-cover bg-center h-[50vh] w-screen'></div>
    </section>
  );
};

export default MenuCard;
