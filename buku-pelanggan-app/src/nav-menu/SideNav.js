import React from "react";
import {FaHome, FaUsers} from "react-icons/fa"

const  SideNav = () => {
    return(
        <div className="bg-white h-screen px-6">
            <div className="px-[1rem] py-4 flex items-center justify-left border-b-[1px] border-inherit text-black">
                <h1 className="text-[1.25rem] leading-[1.25rem] font-extrabold cursor-pointer">Admin</h1>
            </div>
            <div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-inheriet py-3 text-black">
                <FaHome />
                <p className="text-[1rem] leading-[1.25rem] font-light">Home</p>
            </div>
            <div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-inherit py-3 text-black">
                <FaUsers />
                <p className="text-[1rem] leading-[1.25rem] font-light">Pelanggan</p>
            </div>
        </div>
    )
}

export default SideNav;