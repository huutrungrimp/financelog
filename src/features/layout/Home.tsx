import * as React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Resume from './Resume';
import Portfolio from './Portfolio';
import About from './About';


export default function Home() {
    return (
        <div className='home'>
            <About />
            <Resume />
            <Portfolio />
        </div>
    );
}