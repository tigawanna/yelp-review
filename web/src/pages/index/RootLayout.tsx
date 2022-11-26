
import React from 'react'
import { Outlet } from 'react-router-dom';


interface RootLayoutProps {

}

export const RootLayout: React.FC<RootLayoutProps> = ({}) => {
return (
<div className='w-full h-full'>
    <Outlet />
</div>
);
}
