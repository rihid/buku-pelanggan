import React, { useState } from "react";

const EditDataForm = (props) => {
    const [dataEdit, setDataEdit] = useState(props.currentData);
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setDataEdit({ ...dataEdit, [name]: value})
    }
    return(
        <form onSubmit={ (e) => {
            e.preventDefault();
            props.updateData(dataEdit.id, dataEdit)
        }}>
            <div className="sm:col-span-4">
                <label htmlFor="nama-pelanggan" 
                className="block text-sm font-bold leading-6 text-gray-900">Nama Pelanggan</label>
                <div className="mt-2">
                    <input type="text" name="name" value={dataEdit.name} 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
                </div>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="nama-bisnis" 
                className="block text-sm font-bold leading-6 text-gray-900">Nama Bisnis</label>
                <div className="mt-2">
                    <input type="text" name="bisnisName" value={dataEdit.bisnisName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
                </div>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="kontak" 
                className="block text-sm font-bold leading-6 text-gray-900">Kontak</label>
                <div className="mt-2">
                    <input type="text" name="kontak" value={dataEdit.kontak} 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
                </div>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="email" 
                className="block text-sm font-bold leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                    <input type="email" name="email" value={dataEdit.email} 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
                </div>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="website" 
                className="block text-sm font-bold leading-6 text-gray-900">Website</label>
                <div className="mt-2">
                    <input type="text" name="website" value={dataEdit.website}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} />
                </div>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="Alamat" 
                className="block text-sm font-bold leading-6 text-gray-900">Alamat</label>
                <div className="mt-2">
                    <textarea name="alamat" value={dataEdit.alamat} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInputChange} ></textarea>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={ () => props.setEditing(false)}>Edit</button>
            </div>
        </form> 
    )
}

export default EditDataForm;