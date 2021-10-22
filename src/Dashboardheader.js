import React from 'react';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
function Dashboardheader() {
    return (
        <div className='flex justify-end w-full items-center p-1 shadow-md'>
            <div className='p-2 mr-2'>
                <AppsOutlinedIcon />
            </div>
            <div className='flex px-3 py-1 rounded-3xl mr-2' style={{border:'1px solid black'}}>
                <button className='flex items-center'><div className='text-xs pr-1'>Configure Tunnel</div>
                <div className='bg-gray-300 px-1 text-xs' style={{borderRadius:'100%'}}>?</div></button> 
            </div>
            <div className='flex px-3 rounded-3xl mr-2' style={{border:'1px solid black',background:'#4dc0b5'}}>
                <button className='flex items-center'>
                    <ArrowCircleUpOutlinedIcon className='px-1 text-xs ' style={{fill:'white'}}/>
                    <div className='text-xs pr-1  text-white'>Upgrade</div>
                </button> 
            </div>
            <div className='mr-2 relative '>
                <NotificationsNoneOutlinedIcon style={{fontSize:'30',color:'#4dc0b5'}}/>
                <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 py-0.5' style={{fontSize:'7px'}} >4</div>                
            </div>
            <div className='mr-2'>
                <AccountCircleOutlinedIcon style={{fontSize:'30',color:'#4dc0b5'}}/>
            </div>
        </div>
    )
}

export default Dashboardheader
