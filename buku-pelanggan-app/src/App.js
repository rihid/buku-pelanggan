import React, {useState} from 'react';
import CardUser from './users/CardUser';
import AddForm from './forms/AddForm';

function App() {
    const dataPelanggan = [
        {
            id: 1,
            nama: "Agus",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
        {
            id: 2,
            nama: "Bayu",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
        {
            id: 3,
            nama: "Cindy",
            bisnisName: "Nama Bisnis",
            kontak: "Kontak",
            email: "Email",
            website: "Website",
            alamat: "Alamat",
        },
    ]

    const [datas, setData] = useState(dataPelanggan);

    // Add Data Pelanggan
    const addData = (data) => {
        data.id = datas.length + 1;
        setData([...datas, data])
    }
    return (
        <div className="container mx-auto p-8" >
            <AddForm addData={addData} />
            <CardUser dataObj={datas} />
        </div>
    );
}

export default App;
