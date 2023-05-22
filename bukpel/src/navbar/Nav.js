import React, {useState} from 'react';
import TopNav from './layout/TopNav';
import SideNav from './layout/SideNav';
import { Outlet } from 'react-router-dom';

export default function Nav() {
    const [isShow, setShow] = useState(false);

    return (
        <div className='flex bg-[#F3F3F3]'>
            <div className='basis-[20%] border'>
                <SideNav />
            </div>
            <div className='basis-[80%] border'>
                <TopNav setShow={setShow} />
                <main className='px-6'>
                    <div className="pt-6">
                        <Outlet context={[isShow, setShow]}  />
                    </div>
                    
                </main>
            </div>
        </div>
        
    )
}
