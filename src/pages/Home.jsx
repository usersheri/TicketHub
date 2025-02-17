import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

import ticketBG from '../assets/ticketBG.jpg';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Catogories';

function Home() {
  return (
    <div className="relative h-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${ticketBG})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content with higher z-index */}
      <div className="relative z-20">
        <Header />
        {/* <Search /> */}
        <Categories />
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
