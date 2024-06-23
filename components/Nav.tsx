import React from "react";
import {Bars3Icon} from "@heroicons/react/24/solid"

interface Props{
    openNav:()=> void;
}
const Nav = ({openNav}:Props) => {
    return (
        <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    My <span className="text-violet-300">CV</span>
                </h1>
                    <div className="nav-link">Home</div>
                    <div className="nav-link">About me</div>
                    <div className="nav-link">Projects</div>
                    <div className="nav-link">Contact</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-violet-300"/>
                </div>
            </div>
        </div>
    );
};

export default Nav;