import React from 'react';

// core components
import IndexNavbar from '../components/Navbars/IndexNavbar';
import PageHeader from '../components/PageHeader/PageHeader';
import Footer from '../components/Footer/Footer';

// sections for this page/view
import Map from './IndexSections/Map';
import Aboutus from './IndexSections/Aboutus';

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle('index-page');
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle('index-page');
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Map />
          <Aboutus />
        </div>
        <Footer />
      </div>
    </>
  );
}
