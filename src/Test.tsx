import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Test() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className='test-parent'>
            <div className='test-child-menu'>
                <ul>
                    <li>Test 1</li>
                    <li>Test 1</li>
                    <li>Test 1</li>
                </ul>
            </div>
            <div className='test-child-content'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Item One" value="1" />
                                <Tab label="Item Two" value="2" />
                                <Tab label="Item Three" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat dolores sequi, iusto architecto aspernatur soluta maxime ab, cumque culpa accusamus harum aut dignissimos, quibusdam odio animi itaque omnis similique!
                            </p>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>

            </div>
        </div>
    )
}
