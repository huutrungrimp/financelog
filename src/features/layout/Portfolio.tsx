import * as React from 'react';
import { Image } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { dataContext } from '../assets/data/dataProvider';


export default function Portfolio() {
    const username = React.useContext(dataContext)

    return (
        <div id='portfolio'>
            <h2>Portfolios</h2>
            <div className='portfolio'>
                <div className='portfolio-financelog'>
                    <h4>Financial loggers</h4>
                    <div className='portfolio-financelog-content'>
                        <div className='portfolio-financelog-content-image'>
                            <Image style={{ width: '100%', height: '300px', marginBottom: '20px' }} src="https://www.officetimer.com/wp-content/uploads/2020/02/Untitled-design7.png" />
                        </div>
                        <div className='portfolio-financelog-content-text'>
                            <p>
                                Part-timers usually do not have fixed schedules for their job. They might have different contracts with different customers. The part-timers might forget how many hours they worked and how much they earned from individual customers earlier days and which customers they will have to serve today. The part-timers need an app to record their daily work and earnings from their customers, and plan for the coming days.
                            </p>
                            <p>
                                This app helps part-timers to create and update the profile of their customers, view the list and the detail of customers. Create tasks, delete and update the list of their tasks, and see the detail of individual tasks (e.g., hours, earning). In addition, part-timers can see the calendar of their tasks, the overview of total income from different customers, and the weekly and bi-weekly earning from each customer.
                            </p>
                            <p><a href={'/' + username?.username + '/finance'} className="text-primary">View the App</a></p>
                        </div>
                    </div>
                </div>
                <div className='portfolio-covid19'>
                    <h4>Covid-19 Dashboard</h4>
                    <div className='portfolio-covid19-content'>
                        <div className='portfolio-covid19-content-image'>
                            <Image style={{ width: '100%', height: '300px', marginBottom: '20px' }} src="https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1366v.jpg?sfvrsn=4dba955c_12%201366w" />
                        </div>
                        <div className='portfolio-covid19-content-text'>
                            <Link to='#'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}