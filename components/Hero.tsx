import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center"> 
            <Particle/>
            <div className="w-[80%] grid-cols-1 mc-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Hi, I am <span className="text-violet-400">Marie</span> and this is my portfolio!
                    </h1>
                    <TextEffect/>
                </div>
                <div className="w-[500px] hidden bg-[">
                    <Image src ="" alt="user" layout="fill" className="object-cover rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;