import {useContext} from 'react';
import { FaEye, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import avatar from './../assets/ava.jpg'
import Pagination from './Pagination';
import { Context } from '../context'

const CardUser = (props) => {
    const { searchField } = useContext(Context)
    // console.log(props.customers)
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {props.customers.length > 0 ? (
                    props.customers.filter(data => {
                        if(searchField === ''){
                            return data
                        }else if(data.name.toLowerCase().includes(searchField.toLowerCase())){
                            return data
                        }else if(data.bisnisName.toLowerCase().includes(searchField.toLowerCase())){
                            return data
                        }
                    }).map((data) => (
                        <div
                        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={data.id}>
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <img src={avatar} alt="" className='w-24' />
                                </div>
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {data.name}
                                </h5>
                                <p className="flex items-center justify-center gap-2 mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    <FaStore />
                                    <span>{data.bisnisName}</span>
                                </p>
                            </div> 
                            <div className="flex items-center justify-center">
                                <button className="rounded-full bg-[#008EEA] text-white h-10 px-4 w-3/5">
                                    <Link to={`${data.id}`} className="flex items-center justify-center gap-2" >
                                        <span><FaEye /></span>
                                        <span className="font-semibold">Detail</span>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <button className="" onClick={() => {
                                        props.editRow(data)
                                        // console.log(data)
                                    }}>
                                    <span className="font-semibold" >Edit</span>
                                </button>
                                <button className="" onClick={() => props.deleteCustomer(data.id)}>
                                    <span className="font-semibold">Delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Data tidak ada</p>
                )}

            </div>
            {/* <Pagination />   */}
        </>

    )
}

export default CardUser;
