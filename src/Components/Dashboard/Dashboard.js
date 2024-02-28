import React from 'react'
import "../CustomCss/DashboardHeader.css"
import DashboardLeftHeader from './DashboardLeftHeader'
import DashboardTopHeader from './DashboardTopHeader'
import RightSidedashboard from './RightSidedashboard'

function Dashboard() {
    return (
        <>
            <>
                <DashboardTopHeader />
                <DashboardLeftHeader />
                <RightSidedashboard/>


            </>

        </>
    )
}

export default Dashboard