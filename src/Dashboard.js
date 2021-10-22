import React from 'react'
import Dashboardheader from './Dashboardheader'
import DashboardBody from './DashboardBody'

function Dashboard() {
    return (
        <div className='w-full '>
            <Dashboardheader />
            <DashboardBody className='w-full' />
        </div>
    )
}

export default Dashboard
