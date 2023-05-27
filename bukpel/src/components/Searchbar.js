import {useContext, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from '../context'

const Searchbar = (props) => {
    const { searchField, setSearchField } = useContext(Context)
    // console.log(props.search)
    const handleSearch = (e) => {
        setSearchField(e.target.value)
        props.handleChange(e.target.value)
    }
    useEffect(() => {
        console.log(searchField)
    }, [searchField])
    return(
        <form className="relative">
            <input type="text" className="outline-none p-2 rounded-full text-sm border w-full sm:w-80 inline-block" onChange={handleSearch} />
            <button >
                <FaSearch className="absolute h-6 top-2 right-3 bg-transparent text-gray-400" />
            </button>
        </form>
    )
}

export default Searchbar;