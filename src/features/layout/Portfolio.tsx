import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { dataContext } from '../assets/data/dataProvider';


export default function Portfolio() {
    const username = React.useContext(dataContext)

    return (
        <Row id='portfolio' className='portfolio'>
            <Row className='gx-0'>
                <h1 style={{ textAlign: 'center' }}>Portfolios</h1>
            </Row>
            <Row className='gx-0'>
                <Col xs={12} md lg={6}>
                    <Row className='text-center gx-0'>
                        <h3>Financial loggers</h3>
                    </Row>
                    <Row className='gx-0'>
                        <Image style={{ height: '300px' }} src="https://www.officetimer.com/wp-content/uploads/2020/02/Untitled-design7.png" />
                    </Row>
                    <Row className='my-3 gx-0'>
                        <p style={{ textAlign: 'justify' }}>
                            Part-timers usually do not have fixed schedules for their job. They might have different contracts with different customers. The part-timers might forget how many hours they worked and how much they earned from individual customers earlier days and which customers they will have to serve today. The part-timers need an app to record their daily work and earnings from their customers, and plan for the coming days.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            This app helps part-timers to create and update the profile of their customers, view the list and the detail of customers. Create tasks, delete and update the list of their tasks, and see the detail of individual tasks (e.g., hours, earning). In addition, part-timers can see the calendar of their tasks, the overview of total income from different customers, and the weekly and bi-weekly earning from each customer.
                        </p>
                        <p><a href={'/' + username?.username + '/finance'} className="text-primary">View the App</a></p>
                    </Row>
                </Col>
                <Col xs={12} md lg={6}>
                    <Row className='text-center gx-0'>
                        <h3>Covid-19 Dashboard</h3>
                    </Row>
                    <Row className='gx-0'>
                        <Image style={{ height: '300px' }} src="https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1366v.jpg?sfvrsn=4dba955c_12%201366w" />
                    </Row>
                    <Row className='my-3 gx-0'>
                        <Link to='#'>Read more</Link>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
}