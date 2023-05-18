import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

const TopNav = () => {
    return(
        <div className="flex items-center justify-between h-[4.5rem] shadow-sm px-6">
            <div className="flex items-center rounde-[0.5rem]">
                <input type="text" className="h-[2rem] bg-[#F8F9FC] outline-none pl-[0.75rem] rounded-[.25rem] w-[20rem]" placeholder="Cari..." />
                <div className="bg-emerald-300 flex items-center justify-center h-[2rem] px-[.9rem] cursor-pointer rounded-br-[.25rem]">
                    <FaSearch color='white' />
                </div>
            </div>
            <div className="flex items-center gap-[1rem]">
                <div>
                    <button className="flex items-center gap-[.5rem] rounded-[.25rem] bg-emerald-300 text-white h-[2rem] px-[.9rem]">
                        <span><FaPlusCircle/></span>
                        <span className="font-semibold">Tambah</span>
                    </button>
                </div>
                <div>
                    <p>Nama</p>
                    <div>
                        <img src="./img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;