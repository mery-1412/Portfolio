import React from "react";
import certificate from "/home/mery1412/webProjects/portfolio/src/images/certificate.png"
import projects from "/home/mery1412/webProjects/portfolio/src/images/project-management.png"
import links from "/home/mery1412/webProjects/portfolio/src/images/link.png"

const Skills = () =>{
    return(
    <div className="w-full bg-[#f8f8f8] text-black py-28 p-11">
        <div className="flex flex-col justify-center">
            <h1 className="font-mont text-4xl text-center">My Skills</h1>
        </div>

         {/* Cards*/ }
        <div className="flex justify-center space-x-11 mt-12">
       
        <a href="#" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#FEE1E9]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-500 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#e4b5c1] group-hover:to-[#FEE1E8]"></div>
            <img src={certificate} alt="SKILL NAME" class="absolute inset-0 h-full w-full object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-bold text-white">Certificates</h3>
        </a>

        <a href="#" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#BAE7DC]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-500 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#9BD7C8] group-hover:to-[#C2EBE1]"></div>
            <img src={projects} alt="SKILL NAME" class="absolute inset-0 h-full w-full object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-bold text-white">Projects</h3>
        </a>

        <a href="#" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#E4CDF6]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-500 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#C9B5D8] group-hover:to-[#E7D1FA]"></div>
            <img src={links} alt="SKILL NAME" class="absolute inset-0 h-full w-full object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-bold text-white">Links</h3>
        </a>

        </div>
       
    </div>


    )
 
      
}

export default Skills;