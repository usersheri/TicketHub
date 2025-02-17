import React from 'react';
import { PiAirplaneInFlightLight } from 'react-icons/pi';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { IoTrainOutline } from 'react-icons/io5';
import { IoBusOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    {
      id: 1,
      label: 'Movies',
      href: '/movies',
      icon: <MdOutlineLocalMovies className='text-3xl sm:text-5xl' />,
    },
    {
      id: 2,
      label: 'Flights',
      href: '/flights',
      icon: <PiAirplaneInFlightLight className='text-3xl sm:text-5xl' />,
    },
    {
      id: 3,
      label: 'Trains',
      href: '/trains',
      icon: <IoTrainOutline className='text-3xl sm:text-5xl' />,
    },
    {
      id: 4,
      label: 'Bus',
      href: '/bus',
      icon: <IoBusOutline className='text-3xl sm:text-5xl' />,
    },
  ];

  return  (
    <div className="text-white flex justify-center gap-8">
      {categories.map((category) => (
        <div key={category.id} className="relative">
          <Link to={category.href} className="flex flex-col items-center">
            <div className=" flex items-center justify-center rounded-full bg-gray-800 p-4">
              {category.icon}
            </div>
            <div className="mt-1 text-xl font-semibold">{category.label}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
