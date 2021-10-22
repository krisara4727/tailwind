import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WindowIcon from '@mui/icons-material/Window';
import GoogleIcon from '@mui/icons-material/Google';

function Dashboardbodyright() {
    return (
        <div className='flex flex-col w-5/12 ml-2 h-full'>
            <div className='flex p-2 bg-white shadow-md overflow-x-scroll mb-2'>
                <div>
                    <AccountCircleIcon className='m-1' style={{fontSize:50,fill:'green'}} />
                </div>
                <div className='mt-3'>
                    <div className='capitalize text-gray-500 text-xs'>hello</div>
                    <div className='capitalize w-max text-lg'>chivte krishna</div>
                    <div className='flex bg-gray-100 items-center rounded-xl w-max px-2'>
                        <div>
                            <AccountCircleIcon style={{fontSize:25,fill:'gray'}} className='pr-1' />
                        </div>
                        <div className='uppercase text-xs'>
                            Add team
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-4 bg-white shadow-md overflow-x-scroll flex-1'>
                <div className='w-full flex justify-around py-2'>
                    <div className='uppercase text-sm text-gray-600'>
                        recent tests
                    </div>
                    <div className='uppercase text-sm text-gray-600'> 
                        recent issues
                    </div>
                </div>
                <div className='w-1 h-1 bg-black w-full'>

                </div>
                <div className='flex flex-col mt-4'>
                    <div className='text-xs text-gray-600'>
                        URL:www.google.com/maps
                    </div>
                    <div className='flex items-center'>
                        <div className='flex-1 text-xs text-gray-400 mt-1'>
                            Live|chivtekrishna.4727
                        </div>
                        <div className='flex items-center mr-2'>
                            <GoogleIcon style={{fontSize:20,fill:'red'}} className='pr-1' />
                            <div className='pr-1'>92</div>
                            <WindowIcon style={{fontSize:20,fill:'blue'}} className='pr-1' />
                            <div className='pr-1' >10</div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-4'>
                    <div className='text-xs text-gray-600'>
                        URL:www.google.com/maps
                    </div>
                    <div className='flex items-center'>
                        <div className='flex-1 text-xs text-gray-400 mt-1'>
                            Live|chivtekrishna.4727
                        </div>
                        <div className='flex items-center mr-2'>
                            <GoogleIcon style={{fontSize:20,fill:'red'}} className='pr-1' />
                            <div className='pr-1'>92</div>
                            <WindowIcon style={{fontSize:20,fill:'blue'}} className='pr-1' />
                            <div className='pr-1' >10</div>
                        </div>
                    </div>
                </div>
            </div> 

            
        </div>
    )
}

export default Dashboardbodyright
