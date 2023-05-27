import React, {useState} from 'react';
import TopNav from './layout/TopNav';
import SideNav from './layout/SideNav';
import { Outlet } from 'react-router-dom';

export default function Nav() {
    const [isShow, setShow] = useState(false);
    const [search, setSearch] = useState('');
    // console.log(search)
    return (
        <>
            <TopNav setShow={setShow} search={search} setSearch={setSearch} />
            <div className='flex flex-row'>
                <div className='py-2 flex basis-[20%] overflow-auto'>
                    <SideNav />
                </div>
                <div className='basis-[80%] p-6 bg-[#F5F5F5]'>
                    <Outlet context={[isShow, setShow, search, setSearch]}  />
                </div>
            </div>

        </>
        // <div className='flex bg-[#F3F3F3]'>
        //     <div className='basis-[20%] border'>
        //         {/* <SideNav /> */}
        //     </div>
        //     <div className='basis-[80%] border'>
        //         <TopNav setShow={setShow} />
        //         <main className='px-6'>
        //             <div className="pt-6">
        //                 <Outlet context={[isShow, setShow]}  />
        //             </div>
                    
        //         </main>
        //     </div>
        // </div>
        
    )
}
