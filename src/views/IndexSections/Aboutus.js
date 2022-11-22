import React from 'react';
// reactstrap components

export default function Aboutus() {
  return (
    <div className="section section-navbars" id="aboutUs-section">
      <div>
        <img src="/bottombg.jpg" alt="aboutus" width={720} height={480} />
      </div>
      <div className="aboutus-text">
        <h3>About project</h3>
        <p>
          Map news is where geography, media, and journalism can coexist. Together creating a union that will help
          spread global news instantaneously. Not only does this service provide a fun interactive experience, but it
          also exposes users to geographical locations and news they might not have otherwise been exposed to.
        </p>
      </div>
    </div>
  );
}
