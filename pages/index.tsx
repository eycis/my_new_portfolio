import React, { useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/mobileNav";


const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return(
    <div className= "overflow-x-hidden">
      <div>
        <Nav openNav={openNav}/>
        <MobileNav nav={nav} closeNav={closeNav} />
      </div>
    </div>
  );
};
export default HomePage
