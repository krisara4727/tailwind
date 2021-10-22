import React, { useState } from 'react'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AndroidIcon from '@mui/icons-material/Android';
import WebIcon from '@mui/icons-material/Web';
import CompareIcon from '@mui/icons-material/Compare';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BugReportIcon from '@mui/icons-material/BugReport';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

function Sidebar() {
    const [close, setclose] = useState(false);
    const handlenavbar = () => {
        if(close){
            let elements = document.getElementsByClassName('navname');
            for(let i=0; i<elements.length ; i++ ){
                elements[i].style.display='block'
            }
            document.getElementById('#sidebar').style.width = 'max-content';
            
            setclose(!close)
        }
        else{
            document.getElementById('#sidebar').style.width = '50px';
            let elements = document.getElementsByClassName('navname');
            for(let i=0; i<elements.length ; i++ ){
                elements[i].style.display='none'
            }            
            setclose(!close)
        }
    }
    return (
        <div className='min-h-full w-max relative transition duration-500 ease-out ' id='#sidebar' style={{background:'#3b4961',minHeight:'100vh'}}>
            <ul className='flex flex-col align-center w-full overflow-x-hide transition duration-500 ease-out'>
                <li className='flex px-4 py-2 bg-blue  text-white items-center' style={{background:'#4dc0b5',borderBottom: '1px solid #3B4961'}}>
                    <WorkOutlineOutlinedIcon className ='pr-3 ' style={{fontSize:35,fill:'white'}}/>
                    <div className='text-sm font-bold text-white uppercase navname'>Lambdatest</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <SpeedIcon className='pr-3 ' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname' id='#navname'>Dashboard</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <AccessTimeIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white whitespace-nowrap navname'>Realtime testing</div>
                </li>
                <li className='flex px-4 py-2  items-center ' style={{borderBottom: '1px solid grey'}}>
                    <AndroidIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname'>automation</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <WebIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname' >lT browser</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <CompareIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white whitespace-nowrap navname'>visual UI testing</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <FileCopyIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname'>test logs</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <BugReportIcon className='pr-3' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname'>issue tracker</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <IntegrationInstructionsIcon className='pr-3 ' style={{fontSize:35,fill:'gray'}}/>
                    <div className='text-sm font-extralight text-gray-400 capitalize text-white navname'>integrations</div>
                </li>
                <li className='flex px-4 py-2 items-center ' style={{borderBottom: '1px solid grey'}}>
                    <AccountTreeIcon className='pr-3' style={{fontSize:35,fill:'gray',borderBottom: '1px solid #3B4961'}} />
                    <p className='text-sm font-extralight text-gray-400 capitalize text-white navname'>projects</p>
                </li>
            </ul>
    <div className='absolute top-4 w-6 h-6 bg-white cursor-pointer font-bold text-sm' 
    style={{right:'-12px',color:'#4dc0b5',border:'1px solid #4dc0b5',borderRadius:'50%',textAlign:'center'}}
    onClick={handlenavbar}
    >{close?'>':'<'}</div>
        </div>
    )
}

export default Sidebar
