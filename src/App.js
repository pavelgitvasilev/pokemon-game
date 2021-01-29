import React from 'react'
import Header from './components/Header';
import Layout from './components/Layout';
import background1 from "./assets/img/bg1.jpg";
import background2 from "./assets/img/bg2.jpg";
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment> 
    <Header 
      title="This is title"
      descr="This is Description!"
    />
    <Layout 
      id="Layout1"
      title="Layout-1"
      descr="Layout-1"
      urlBg={background1}
    />
    <Layout 
      id="Layout2"
      title="Layout-2"
      descr="Layout-2"
      colorBg="#aeaeae"
      />
    <Layout 
      id="Layout3"
      title="Layout-3"
      descr="Layout-3"
      urlBg={background2}
      />
    <Footer />
  </React.Fragment>
  // можно использовать просто <>
  )
}

export default App;
