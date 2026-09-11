import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <CustomCursor />
      <Navbar />

      <main className="not-found-container container">
        <span className="nf-code">404 // MISSING ROUTE</span>
        <h1 className="nf-title">
          "Looks like this idea hasn't been built yet."
        </h1>
        <p className="nf-desc">
          The path or case study you requested does not exist in this realm.
        </p>

        <Link to="/" className="nf-home-btn" data-cursor="HOVER">
          RETURN TO HOMEPAGE →
        </Link>
      </main>

      <Footer />
    </div>
  );
};
