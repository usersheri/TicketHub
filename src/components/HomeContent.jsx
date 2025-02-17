import React from 'react';
import { Link } from 'react-router-dom';
import { PiAirplaneInFlightLight } from 'react-icons/pi';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { IoTrainOutline, IoBusOutline } from 'react-icons/io5';

function HomeContent() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to TicketHub</h1>
        <p className="text-lg mt-2">Your one-stop destination for booking tickets for movies, flights, trains, and buses!</p>
        <Link to="/movies" className="mt-4 inline-block bg-white text-blue-950 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </Link>
      </section>

      {/* Categories Section */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Explore Ticket Categories</h2>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          {[
            { id: 1, label: 'Movies', href: '/movies', icon: <MdOutlineLocalMovies size={50} /> },
            { id: 2, label: 'Flights', href: '/flights', icon: <PiAirplaneInFlightLight size={50} /> },
            { id: 3, label: 'Trains', href: '/trains', icon: <IoTrainOutline size={50} /> },
            { id: 4, label: 'Bus', href: '/bus', icon: <IoBusOutline size={50} /> },
          ].map((category) => (
            <Link key={category.id} to={category.href} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="p-4 bg-gray-800 text-white rounded-full">{category.icon}</div>
              <span className="mt-2 font-semibold text-gray-700">{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Ticketing Platforms */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Popular Ticketing Platforms</h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {[
            { id: 1, name: 'BookMyShow', link: 'https://www.bookmyshow.com', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRareXwecIJ_COP-v3kUhJnSAn9aJ1H-2ODA&s' },
            { id: 2, name: 'RedBus', link: 'https://www.redbus.in', logo: 'https://logowik.com/content/uploads/images/redbus2333.logowik.com.webp' },
            { id: 3, name: 'Skyscanner', link: 'https://www.skyscanner.com', logo: 'https://logos.bugcrowdusercontent.com/logos/f385/4e29/59412af3/0ec567cf519e0103e54b114559943588_square_logo.png' }
          ].map((platform) => (
            <a key={platform.id} href={platform.link} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-48">
              <img src={platform.logo} alt={platform.name} className="w-20 h-20 object-contain" />
              <span className="mt-2 font-semibold text-gray-700">{platform.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Search & Explore Section */}
      <section className="py-10 text-center bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Find Your Tickets</h2>
        <div className="mt-4">
          <input type="text" placeholder="Search events, movies, or travel..." className="px-4 py-2 rounded-l-lg border border-gray-300 w-72" />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition">Search</button>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;
