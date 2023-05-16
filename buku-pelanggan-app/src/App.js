import React, {useState} from 'react';
import CardUser from './users/CardUser';
import AddForm from './forms/AddForm';
import EditDataForm from './forms/EditDataForm';

function App() {
    const dataPelanggan = [
        {
            id: 1,
            name: "Agus",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
        {
            id: 2,
            name: "Bayu",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
        {
            id: 3,
            name: "Cindy",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
    ];

    const initialFormState = {
        id: null,
        name: "",
        bisnisName: "",
        kontak: "",
        email: "",
        website: "",
        alamat: "",
    };
    // Setting State
    const [datas, setData] = useState(dataPelanggan);
    const [currentData, setCurrentData] = useState(initialFormState)
    const [editing, setEditing] = useState(false);

    // Add Data Pelanggan
    const addData = (data) => {
        data.id = datas.length + 1;
        setData([...datas, data]);
    };
    // Edit Data Pelanggan
    const editData = (data) => {
        setEditing(true)
        setCurrentData({
            id: data.id,
            name: data.name,
            bisnisName: data.bisnisName,
            kontak: data.kontak,
            email: data.email,
            website: data.website,
            alamat: data.alamat,
        })
    }
    const updateData = (id, updatedData) => {
        setEditing(false);
        setData( (datas.map( (data) => {
            return(
                data.id === id ? updatedData : data
            )
        })))
    }
    // Delete Data Pelanggan
    const deleteData = (id) => {
        setData(datas.filter( (data) => {
            return(
                data.id !== id
            )
        }))
    }
    return (
        <div className="container mx-auto p-8" >
            {editing ? (
                <EditDataForm setEditing={setEditing} currentData={currentData} updateData={updateData} />
            ) : (
                <AddForm addData={addData} />
            )}
            <CardUser dataObj={datas} deleteData={deleteData} editData={editData} />
        </div>
    );
}

export default App;
