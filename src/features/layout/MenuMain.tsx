import * as React from 'react';
import Menu4Mobile from './Menu4Mobile';
import Menu4Desktop from './Menu4Desktop';

export default function MenuMain() {
    return (
        <div className='gx-0 position-fixed'>
            <div className='menu4Desktop gx-0'>
                <Menu4Mobile />
            </div>
            <div className='menu4Mobile gx-0'>
                <Menu4Desktop />
            </div>
        </div>

    );
}