import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import GuidePage from './pages/GuidePage';
import RsvpPage from './pages/RsvpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="story" element={<StoryPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="rsvp" element={<RsvpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
