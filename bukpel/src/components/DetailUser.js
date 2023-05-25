import React from "react";
import { FaArrowLeft, FaPen, FaTrashAlt, FaStore, FaUserCircle } from "react-icons/fa";
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
                    <li class="mr-6 flex items-center">
                        <a class="text-black-500 hover:text-blue-800" href="#"><FaTrashAlt /></a>
                    </li>
                </ul>
            </div>
            <div className="px-8 py-4">
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
            <div className="px-8 py-6">
                <ul className="divide-y divide-gray-200">
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <FaUserCircle />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900 truncate">
                                    Nama Pelanggan
                                </p>
                            </div>
                            <div className="">
                                :
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900 truncate">
                                    Vania Astuti
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <FaUserCircle />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                    Nama Pelanggan
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                :
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                    Vania Astuti
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
        </div>
    )

}

export default DetailUser;