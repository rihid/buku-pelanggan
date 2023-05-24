import React from "react";
import { FaArrowLeft, FaPen, FaTrashAlt, FaStore } from "react-icons/fa";
import avatar from "./../assets/ava.jpg"

const DetailUser = (props) => {
    return(
        <div className="w-full rounded overflow-hidden bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="px-8 py-6">
                <ul class="flex">
                    <li class="mr-6 flex items-center">
                        <a class="text-black-500 hover:text-blue-800" href="#"><FaArrowLeft /></a>
                    </li>
                    <li class="mr-6 flex items-center">
                        <a class="text-black-500 hover:text-blue-800" href="#"><FaPen /></a>
                    </li>
                    <li class="mr-6 flaex items-center">
                        <a class="text-black-500 hover:text-blue-800" href="#"><FaTrashAlt /></a>
                    </li>
                </ul>
            </div>
            <div className="px-8 py-6">
                <div className='flex items-center justify-start gap-6'>
                    <div>
                        <img src={avatar} alt="" className='object-contain w-24' />
                    </div>
                    <div className="flex flex-col items-start">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Vania Astuti
                        </h5>
                        <p className="flex items-center justify-center gap-2 mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            <FaStore />
                            <span>Vania Store</span>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
    )

}

export default DetailUser;