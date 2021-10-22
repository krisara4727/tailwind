import React from 'react'
import Dashboardbodyright from './Dashboardbody/Dashboardbodyright'
import Dashboardbodyleft from './Dashboardbody/Dashboardbodyleft'

function DashboardBody() {
    return (
        <div className='flex w-full bg-gray-200 h-full p-4'>
            <Dashboardbodyleft />
            <Dashboardbodyright className='w-1/12' />
        </div>
    )
}

export default DashboardBody
