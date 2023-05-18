import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

const TopNav = () => {
    return(
        <div className="flex items-center justify-between h-[4.5rem] shadow-sm px-6 bg-white">
            <div className="flex items-center">
                <div className="flex items-center h-[2rem] px-[.9rem] rounded-bl-[.25rem] gap-2 bg-[#D9D9D9]">
                    <FaSearch color='#222426' />
                    <input type="text" placeholder="Telusuri Pelanaggan..." className="outline-none bg-[#D9D9D9] w-96" />
                </div>
            </div>
            <div className="flex items-center gap-[1rem]">
                <div>
                    <button className="flex items-center gap-[.5rem] rounded-[.25rem] bg-[#008EEA] text-white h-[2rem] px-[.9rem]">
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