import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CompletedTask from './CompletedTask';
import IncompletedTask from './IncompletedTask';
import AllTasks from './AllTasks';
import { componentTheme } from '../../assets/styles/mui/styles';


export default function TaskList() {
    const [value, setValue] = React.useState('allTasks');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={componentTheme}>
            <div id='taskList'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All" value="allTasks" />
                            <Tab label="Completed" value="completedTasks" />
                            <Tab label="Incompleted" value="incompletedTasks" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{ p: 1 }} value="allTasks">
                        <AllTasks />
                    </TabPanel>
                    <TabPanel sx={{ p: 1 }} value="completedTasks">
                        <CompletedTask />
                    </TabPanel>
                    <TabPanel sx={{ p: 1 }} value="incompletedTasks">
                        <IncompletedTask />
                    </TabPanel>
                </TabContext>
            </div>
        </ThemeProvider>
    );
}