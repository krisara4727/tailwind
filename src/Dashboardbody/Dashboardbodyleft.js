import React from 'react';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';

function Dashboardbodyleft() {
    return (
        <div className='flex flex-col w-full '>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 w-full mb-2'>
                <div className='flex flex-col shadow-md w-full p-4 bg-white'>
                    <div className='text-xl tracking-wide uppercase text-black-400'>Realtime sessions</div>
                    <div className='capitalize text-xs text-gray-400 mb-2'>subscribed 1 parallel session</div>
                    <div className='text-sm capitalize text-black-400'>free sessions</div>
                    <div className='text-gray-500'>1/6</div>
                    <div className='flex  justify-center relative'>
                        <div className="semicircle1">
                        </div>
                        <div className='hide'></div>
                        <div className='absolute bottom-0 left-50 text-2xl'>0</div>
                        
                    </div>
                    <div className='capitalize text-sm text-center'>parallel sessions</div>
                    <div className='uppercase text-sm text-400 mt-6' style={{color:'#4dc0b5'}}>view more</div>
                </div>


                <div className='flex flex-col shadow-md p-4 bg-white'>
                    <div className='text-xl tracking-wide uppercase text-black-400'>Realtime sessions</div>
                    <div className='capitalize text-xs text-gray-400 mb-2'>subscribed 1 parallel session</div>
                    <div className='text-sm capitalize text-black-400'>free sessions</div>
                    <div className='text-gray-500'>0/100</div>
                    <div className='flex justify-center relative'>
                        <div className='semicircle2' >
                        </div>
                        <div className='hide'></div>
                        <div className='absolute bottom-0 left-50 text-2xl'>0</div>
                    </div>
                    <div className='capitalize text-sm text-center '>parallel sessions</div>
                    <div className='flex w-full justify-center'>
                        <div className=' text-sm text-400 mt-6 bg-pink-400 text-white p-2 rounded-sm'>start Test</div>
                        </div>
                    
                </div>


                <div className='flex flex-col shadow-md p-4 bg-white'>
                    <div className='text-xl tracking-wide uppercase text-black-500 mb-2'>
                        integrations
                    </div>
                    <div className='flex items-center mb-2'>
                        <ApiOutlinedIcon className='pr-3 ' style={{fontSize:45,fill:'blue'}} />
                        <div className='mr-10'>Jira</div>
                        <button className='uppercase py-1 px-2 bg-gray-200 text-xs font-medium border-2 text-gray-600 border-gray-300 rounded-xl ml-3'>install</button>
                    </div>
                    <div className='flex items-center mb-2'>
                        <BrightnessHighOutlinedIcon className='pr-3 ' style={{fontSize:45,fill:'green'}} />
                        <div className='mr-10'>Slack</div>
                        <button className='uppercase py-1 px-2 bg-gray-200 text-xs font-medium border-2 text-gray-600 border-gray-300 rounded-xl'>install</button>
                    </div>
                    <div className='flex items-center mb-2'>
                        <CastConnectedOutlinedIcon className='pr-3 ' style={{fontSize:45,fill:'red'}} />
                        <div className='mr-9'>Asana</div>
                        <button className='uppercase py-1 px-2 bg-gray-200 text-xs font-medium border-2 text-gray-600 border-gray-300 rounded-xl '>install</button>
                    </div>
                    <div className='uppercase text-xs mt-2' style={{color:'#4dc0b5'}}>
                        see more
                    </div>
                </div>

            </div>



            <div className='bg-white py-8 px-16 relative h-full'>
            <table id="q-graph">
                <tbody>
                    <tr class="qtr" id="q1">
                        <th scope="row">oct 10</th>
                        <td class="sent bar" style={{height: '75px'}}><p>2</p></td>
                    </tr>
                    <tr class="qtr" id="q2">
                        <th scope="row">oct 19</th>
                        <td class="sent bar" style={{height: '140px'}}><p>4</p></td>
                    </tr>
                    <tr class="qtr" id="q3">
                        <th scope="row">oct 22</th>
                        <td class="sent bar" style={{height: '220px'}}><p>7</p>
                        </td>
                    </tr>
                        <tr class="qtr" id="q4">
                        <th scope="row">oct 21</th>
                        <td class="sent bar" style={{height: '100px'}}><p>3</p></td>
                    </tr>
                </tbody>
                </table>

                <div id="ticks">
                <div class="tick" style={{height: '59px'}}><p>10</p></div>
                <div class="tick" style={{height: '59px'}}><p>8</p></div>
                <div class="tick" style={{height: '59px'}}><p>6</p></div>
                <div class="tick" style={{height: '59px'}}><p>4</p></div>
                <div class="tick" style={{height: '59px'}}><p>2</p></div>
                </div>

                <div class='tableside'>
                    No.of Tests
                </div>
                <div className='mt-6 text-center'>Dates</div>

            </div>
        </div>
    )
}

export default Dashboardbodyleft
