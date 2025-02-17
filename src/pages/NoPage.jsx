import React from 'react'

function NoPage() {
  return (
    
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-red-600">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="mt-4">
              <a
                href="/"
                className="text-blue-600 hover:text-blue-800 underline transition duration-300"
              >
                Go back home
              </a>
            </p>
          </div>
        </div>
  )
}

export default NoPage