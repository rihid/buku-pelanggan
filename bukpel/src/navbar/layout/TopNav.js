import React from 'react';
import avatar from './../../assets/ava.jpg'
import { FaSearch, FaPlusCircle } from "react-icons/fa";

export default function TopNav(props) {
    return(
        <div className="flex items-center justify-between gap-12 h-20 shadow-sm px-6 bg-white">
            <div className="flex items-center">
                <div className="flex items-center h-8 px-[.9rem] gap-2 bg-[#D9D9D9] rounded-full w-full">
                    <FaSearch color='#222426' />
                    <input type="text" placeholder="Telusuri Pelanaggan..." className="outline-none bg-[#D9D9D9] w-96" />
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div>
                    <button className="flex items-center gap-4 rounded-full bg-[#008EEA] text-white h-8 px-[.9rem]" onClick={() => {return props.setShow(true)}} >
                        <span><FaPlusCircle/></span>
                        <span className="font-semibold">Tambah</span>
                    </button>
                </div>
                <div className='flex items-center'>
                    <div>
                        <img src={avatar} alt="" className='object-contain w-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}
