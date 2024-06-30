import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center"> 
            <Particle/>
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Hi, I am <span className="text-violet-400">Marie</span> and this is my portfolio!
                    </h1>
                    <p className = "mt-[2rem] text-[20px]  text-[#ffffff92]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque provident pariatur sint ipsam 
                        alias mollitia earum, doloribus aliquid beatae? Fugit cupiditate ipsum harum consequatur?
                    </p>
                    <TextEffect/>
                </div>
                <div className="w-[500px] hidden bg-violet-400 relative lg:flex items-center rounded-full h-[500px]">
                    <Image src = "/images/me.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;