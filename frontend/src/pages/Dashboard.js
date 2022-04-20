import React from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import BasePage from './BasePage'
import Card from '../components/UI/Card'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const urls = useSelector(state => state.auth.user.urls)
    const info = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 49, 60, 70, 91]
            }
        ]
    }
    // #TODO: Fix duplicated card.

    return (
        <BasePage name="Dashboard">
            <Wrapper>
                <Chart
                    options={info.options}
                    series={info.series}
                    type="bar"
                    width="96%"
                    height="60%"
                />
                <div className='cards'>
                    <Card>
                        <h2> {getViewsAmount(urls)}</h2>
                        <h2>  Total clicks</h2>
                    </Card>
                    <Card>
                        <h2>{urls.length ? urls.length : 0}</h2>
                        <h2>Online links</h2>
                    </Card>
                </div>
            </Wrapper>
        </BasePage>
    )
}

const getViewsAmount = (urls) => {
    let totalAmount = 0
    for (const [url] of Object.entries(urls)) {
        for (const [view] of Object.entries(urls[url].views)) {
            totalAmount = totalAmount + urls[url].views[view].amount
        }
    }
    return totalAmount
}
export default Dashboard