import React from "react";
import {FaHome, FaUsers} from "react-icons/fa"

const  SideNav = () => {
    return(
        <div className="bg-emerald-300 h-screen px-[1.5rem]">
            <div className="px-[1rem] py-[2rem] flex items-center justify-center border-b-[1px] border-indigo-600 text-white">
                <h1 className="text-[1.25rem] leading-[1.5rem] font-extrabold cursor-pointer">Admin</h1>
            </div>
            <div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-indigo-600 py-[1.25rem] text-white">
                <FaHome />
                <p className="text-[1rem] leading-[1.25rem] font-bold">Home</p>
            </div>
            <div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-indigo-600 py-[1.25rem] text-white">
                <FaUsers />
                <p className="text-[1rem] leading-[1.25rem] font-bold">Pelanggan</p>
            </div>
        </div>
    )
}

export default SideNav;