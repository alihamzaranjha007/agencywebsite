import React from 'react';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='resouce'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         <CardItem/>
      </div>
    </div>
  );
};

export default Cards;
