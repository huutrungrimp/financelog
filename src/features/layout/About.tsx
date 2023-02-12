import React from 'react'
import { Image } from 'react-bootstrap'

export default function About() {
    return (
        <div id='about' className='about'>

            <h2>About me</h2>

            <div className='about-content'>
                <div className='about-content-text'>
                    <p>
                        I have been interested in full-stack development since covid-19 pandemic in 2020, when the availability encouraged me to find new hobbies and another potential pathway for the loss of my work hours at the Hospital Line Services (HLS). Recall the past period, it was a very hard time for me to start programming a web app because I had just been a manual worker, with a very limited knowledge in computer and new programming concepts. However, the patience as well as skills on problem analysis and resolution in my life has helped me to overcome the challenges. After one-year intensive study and practices, I successfully completed “CS50's Web Programming with Python and JavaScript” course from Edx with 6 hand-on experience projects. Since 2021, I have daily spent 3 - 4 hours, between 6:00 am and 10:00 am, on web development, before getting ready for full-time job at the HLS, which allows me to sustain my current life and programming interest.
                    </p>
                    <p>
                        I will keep programming daily and it is certainly one of my hobbies for my old age. However, I always hope to find web development internship opportunities, which allow me to involve in actual projects with other team members.
                    </p>
                </div>
                <div className='about-content-image'>
                    <Image className='rounded' style={{ width: '100%', height: 'auto' }} src='https://cdn.britannica.com/74/116574-050-E72AA1B8/Ice-skaters-Rideau-Canal-Ottawa.jpg' />
                </div>
            </div>

        </div>
    )
}
