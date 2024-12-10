import React from "react";

const Loader = () => (
    <div className="flex justify-center items-center w-full h-[90vh]">
        <div className="flex justify-center items-end overflow-hidden w-[100px] min-w-[100px] h-[50px] mx-auto z-[2] relative left-0 right-0">
            <div
            className="w-[10px] h-[5px] mx-[2px] bg-[#404040] animate-dance"
            style={{ animationDelay: "250ms" }}
            ></div>
            <div
            className="w-[10px] h-[5px] mx-[2px] bg-[#404040] animate-dance"
            style={{ animationDelay: "715ms" }}
            ></div>
            <div
            className="w-[10px] h-[5px] mx-[2px] bg-[#404040] animate-dance"
            style={{ animationDelay: "475ms" }}
            ></div>
            <div
            className="w-[10px] h-[5px] mx-[2px] bg-[#404040] animate-dance"
            style={{ animationDelay: "25ms" }}
            ></div>
            <div
            className="w-[10px] h-[5px] mx-[2px] bg-[#404040] animate-dance"
            style={{ animationDelay: "190ms" }}
            ></div>
        </div>
    </div>
)

export default Loader;