import React, { useState } from 'react';
import './DualBanner.css';

const DualBanner = () => {
  const [hovered, setHovered] = useState(null); // 'designer' ou 'coder' ou null

  return (
    <div className="dual-flex-container">
      {/* Bloc Designer */}
      <div
        className={`dual-block designer${hovered === 'designer' ? ' active' : ''}${hovered === 'coder' ? ' hidden' : ''}`}
        onMouseEnter={() => setHovered('designer')}
        onMouseLeave={() => setHovered(null)}
      >
        {hovered === 'designer' ? (
          <div className="dual-block-details">
            <h2>designer</h2>
            <p>Product designer specialising in UI design and design systems. Passionné par la création d'expériences utilisateurs élégantes et fonctionnelles.</p>
          </div>
        ) : (
          <h1>designer</h1>
        )}
      </div>
      {/* Bloc Coder */}
      <div
        className={`dual-block coder${hovered === 'coder' ? ' active' : ''}${hovered === 'designer' ? ' hidden' : ''}`}
        onMouseEnter={() => setHovered('coder')}
        onMouseLeave={() => setHovered(null)}
      >
        {hovered === 'coder' ? (
          <div className="dual-block-details">
            <h2>&lt;coder&gt;</h2>
            <p>Front end developer who writes clean, elegant and efficient code. Spécialiste des interfaces modernes et performantes.</p>
          </div>
        ) : (
          <h1>&lt;coder&gt;</h1>
        )}
      </div>
    </div>
  );
};

export default DualBanner; 