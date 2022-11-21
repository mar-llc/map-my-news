import React from 'react';
// reactstrap components

export default function Aboutus() {
  return (
    <div className="section section-navbars" id="aboutUs-section" style={{ display: 'flex', gap: '2vw' }}>
      <div style={{ marginLeft: '2vw' }}>
        <img src="/bottombg.jpg" alt="aboutus" width={720} height={480} />
      </div>
      <div style={{ maxWidth: '40vw' }}>
        <h3 style={{ marginTop: '20vh' }}>About project</h3>
        <p>
          Map news is where geography, media, and journalism can coexist. Together creating a union that will help
          spread global news instantaneously. Not only does this service provide a fun interactive experience, but it
          also exposes users to geographical locations and news they might not have otherwise been exposed to.
        </p>
      </div>
    </div>
  );
}
