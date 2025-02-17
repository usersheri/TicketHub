import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import ChangingTickets from './components/ChangingTickets';
import {flightTickets,trainTickets,moviesTickets,busTickets} from "./datas/index"
function App() {
  return (
    <Router>
      <Routes>
        {/* Define the Home route and its nested routes */}
        <Route path="/" element={<Home />}>
          <Route path="/movies" element={<ChangingTickets type={moviesTickets} />} />
          <Route path="/flights" element={<ChangingTickets type={flightTickets} />} />
          <Route path="/trains" element={<ChangingTickets type={trainTickets} />} />
          <Route path="/bus" element={<ChangingTickets type={busTickets} />} />
        </Route>

        {/* Catch-all route for invalid paths */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
