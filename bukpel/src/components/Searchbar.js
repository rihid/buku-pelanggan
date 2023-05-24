import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
    return(
        <form className="relative">
            <input type="text" className="outline-none p-2 rounded-full text-sm border w-full sm:w-80 inline-block" />
            <button >
                <FaSearch className="absolute h-6 top-2 right-3 bg-transparent text-gray-400" />
            </button>
        </form>
    )
}

export default Searchbar;