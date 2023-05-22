import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import CardUser from "./CardUser";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Main = () => {
    const customersData = [
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

    const [customers, setCustomers] = useState(customersData);
    const [currentCustomer, setCurrentCustomer] = useState(initialFormState);
    const [editing, setEditing] = useState(false)
    const [isShow, setShow] = useOutletContext();

    // CRUD Operation
    const addCustomer = (customer) => {
        customer.id = customers.length + 1
        setCustomers([...customers, customer])
    };
    const deleteCustomer = (id) => {
        setEditing(false)
        setCustomers(customers.filter((customer) => { return customer.id !== id}))
    };
    const editRow = (data) => {
        setEditing(true)
        // console.log(data)
        setCurrentCustomer({
            id: data.id,
            name: data.name,
            bisnisName: data.bisnisName,
            kontak: data.kontak,
            email: data.email,
            website: data.website,
            alamat: data.alamat,
        })
    };
    const updateData = (id, updatedData) => {
        setEditing(false)
        setCustomers(customers.map((dt) => (dt.id === id ? updatedData : dt)))
    };
    return(
        <main className='px-6'>
        <div className="pt-6">
            <CardUser customers={customers} deleteCustomer={deleteCustomer} setShow={setShow} editRow={editRow} />
            {/* <DetailUser customers={customers} /> */}
            {editing ? (
                <EditForm currentCustomer={currentCustomer} updateData={updateData} setEditing={setEditing} />
            ) : (   
                <AddForm addCustomer={addCustomer} isShow={isShow} setShow={setShow} />
            )}
            
        </div>
    </main>
    )
}

export default Main;