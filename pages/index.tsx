import React, { useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/mobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";


const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return(
    <div className= "overflow-x-hidden">
      <div>
        {/*Navigation Bar*/}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav}/>
        {/* hero section */}
        <Hero/>
        <div className="relative z-[30]">
          <About/>
        </div>
      </div>
    </div>
  );
};
export default HomePage
