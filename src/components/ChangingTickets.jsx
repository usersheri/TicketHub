import React from 'react';
import { Link } from 'react-router-dom';

function ChangingTickets({ type = [] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {type.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {type.map((item, i) => (
            <Link 
              to={item.link} 
              key={i} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-slate-900 fle hover:bg-red-600 transition-all rounded-lg shadow-md p-4 flex sm:flex-col  items-center text-center">
                <img 
                  src={item.logo || 'https://via.placeholder.com/100'} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-md border  border-gray-200"
                />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No ticket options available.</p>
      )}
    </div>
  );
}

export default ChangingTickets;
