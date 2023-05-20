import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const cardUser = (props) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.dataObj.length > 0 ? (
            props.dataObj.map((data) => (
                <div
                className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={data.id}>
                    <div className="flex flex-col items-center justify-center">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {data.name}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{data.bisnisName}</p>
                    </div>
                    {/* <div>
                        <button onClick={ () => {props.editData(data)}}>Edit</button>
                        <button onClick={ () => {props.deleteData(data.id)}}>Delete</button>
                    </div> */}
                    <div className="flex items-center justify-center">
                        <button className="rounded-full bg-[#008EEA] text-white h-10 px-4 w-3/5">
                            <Link to={`pelanggan/${data.id}`} className="flex items-center justify-center gap-2" >
                                <span><FaEye /></span>
                                <span className="font-semibold">Detail</span>
                            </Link>
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <p>Data tidak ada</p>
        )}

    </div>
)

export default cardUser;