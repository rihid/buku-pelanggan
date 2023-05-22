import React from 'react';
import {FaHome, FaUsers} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SideNav() {
	return(
		<div className="bg-white h-screen px-6">
			<div className="px-[1rem] py-4 flex items-center justify-left border-b-[1px] border-inherit text-black">
				<h1 className="text-[1.25rem] leading-[1.25rem] font-extrabold cursor-pointer">Admin</h1>
			</div>
			<div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-inheriet py-3 text-black">
				<FaHome />
				<Link to={'/'}>
					<p className="text-[1rem] leading-[1.25rem] font-light">Home</p>	
				</Link>
			</div>
			<div className="flex items-center justify-left gap-[1rem] border-b-[1px] border-inherit py-3 text-black">
				<FaUsers />
				<Link to={'pelanggan'}>
					<p className="text-[1rem] leading-[1.25rem] font-light">Pelanggan</p>
				</Link>
			</div>
		</div>
	)
}
