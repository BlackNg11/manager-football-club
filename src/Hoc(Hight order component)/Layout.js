import React from 'react';
import Header from '../Component/Header_Footer/Header';


const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    Footer
  </div>
);

export default Layout;
