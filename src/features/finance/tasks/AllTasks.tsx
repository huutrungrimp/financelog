import * as React from 'react';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { dataContext } from '../../assets/data/dataProvider';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';


export default function AllTasks() {
    const tasks = React.useContext(dataContext)?.tasks
    const username = React.useContext(dataContext)?.username
    const navigate = useNavigate()

    const myColumns: GridColDef[] = [
        { field: 'id', headerName: 'Id', maxWidth: 30, hide: true },
        { field: 'title', headerName: 'Title', maxWidth: 200 },
        { field: 'start', headerName: 'Start', minWidth: 200 },
        { field: 'end', headerName: 'End', width: 200 },
        { field: 'hours', headerName: 'Hours', width: 100 },
        { field: 'completed', headerName: 'Completed' },
        { field: 'task_pay', headerName: 'Total Pay' }
    ];

    const myRows = new Array()

    Object.keys(tasks).map((i: string) => {
        const dict = {
            id: tasks[i].id,
            title: tasks[i].title,
            start: tasks[i].date_time_start.toString().substring(0, 10) + ' '
                + (new Date(tasks[i].date_time_start).toString().substring(0, 15)).toString().substring(0, 3) + ' at '
                + (new Date(tasks[i].date_time_start).toString().substring(16, 21)),
            end: tasks[i].date_time_end.toString().substring(0, 10) + ' '
                + (new Date(tasks[i].date_time_end).toString().substring(0, 15)).toString().substring(0, 3) + ' at '
                + (new Date(tasks[i].date_time_end).toString().substring(16, 21)),
            hours: tasks[i].hours,
            completed: (tasks[i].isCompleted === true) ? ('Yes') : ('No'),
            task_pay: tasks[i].task_pay,
        };
        myRows.push(dict)
    })
    const [selectionModel, setSelectionModel] = React.useState<GridSelectionModel>([]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={myRows}
                columns={myColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                selectionModel={selectionModel}
                checkboxSelection={false}
                hideFooterSelectedRowCount
                onSelectionModelChange={(selection) => {
                    if (selection.length > 1) {
                        const selectionSet = new Set(selectionModel);
                        const result = selection.filter((s) => !selectionSet.has(s));
                        setSelectionModel(result);
                    } else {
                        setSelectionModel(selection);
                        navigate(`/${username}/finance/tasks/${selection[0]}`)
                    }
                }}
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'start', sort: 'desc' }],
                    },
                }}
                sx={{
                    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
                        display: "none"
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "bold"
                    },
                    "& .MuiTablePagination-displayedRows ": {
                        margin: "auto"
                    }                    
                }}
            />
            <IconButton className='gx-0 mx-0 px-0' onClick={() => { navigate('/' + username + '/finance/tasks/' + 'new') }}>
                <ControlPointIcon className='gx-0 mx-0 px-0' sx={{ mx: 0, fontSize: '20', color: 'secondary.dark' }} fontSize="medium" color='success' />
                <Typography color='black'>Add Tasks</Typography>
            </IconButton>
        </div>
    );
}