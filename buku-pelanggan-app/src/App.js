import React, {useState} from 'react';
import CardUser from './users/CardUser';
import AddForm from './forms/AddForm';
import SideNav from './nav-menu/SideNav';
import TopNav from './nav-menu/TopNav';
import DetailUser from './users/DetailUser';

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
            name: "Agus",
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
    const [isShow, setShow] = useState(false)

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
        // setEditing(false);

        setData(datas.map((dt) => (dt.id === id ? updatedData : dt)))
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
        <div className='flex bg-[#F3F3F3]'>
            <div className='basis-[20%] border'>
                <SideNav />
            </div>
            <div className='basis-[80%] border'>
                <TopNav setShow={setShow} />
                <main className='px-6'>
                    <AddForm addData={addData} isShow={isShow} setShow={setShow} />
                    <div className="pt-6">
                        <CardUser dataObj={datas} deleteData={deleteData} editData={editData} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
