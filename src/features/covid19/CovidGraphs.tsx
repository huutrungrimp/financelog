import React, { useContext } from 'react'
import { dataContext } from '../assets/data/dataProvider';
import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";
import { } from '../../interface';
import { createTheme, FormControl, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import moment from 'moment';
import { Col, Image, Row } from 'react-bootstrap';
import Covid19 from '../assets/images/Covid.png'
import { statusDict } from '../assets/data/variables';
import { muitheme } from '../assets/styles/mui/styles';

export default function CovidGraphs() {

  const epiGraph = useContext(dataContext)?.covidData.epiGraph
  const [status, setStatus] = React.useState('confirmed_positive');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div tabIndex={0} className='tooltipClass'>
          <p>{`Date: ${payload[0].payload.reported_date.toString().slice(0, 10)}`}</p>
          <p>{payload[0].name.toString()?.charAt(0).toUpperCase() + payload[0].name.slice(1).toString().replaceAll('_', ' ')}: {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: '13px'
          }
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            fontSize: '13px',
            width: '100%',
            [muitheme.breakpoints.down('sm')]: {
              margin: '10px 0px 10px 0px'
            }            
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className='chart'>
        <Row className='justify-content-between'>
          <Col xs={12} sm md lg xl={3}>
            <FormControl variant="standard">
              <Select
                value={status}
                onChange={handleChange}
                label="Status"
              >
                {Object.entries(statusDict).map(item => (
                  <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Image className='d-none d-sm-block' style={{ maxWidth: '200px', height: 'auto' }} src={Covid19} />
          </Col>
          <Col xs={12} md lg xl={9}>
            <ResponsiveContainer
              width='100%'
              aspect={2}
            >
              <BarChart
                data={epiGraph}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <XAxis
                  dataKey="reported_date"
                  tickFormatter={(tickItem) => moment(new Date(tickItem)).format('MMM YY')}
                  tick={{ fontSize: '12px' }}
                />
                <YAxis
                  tick={{ fontSize: '12px' }}
                  tickFormatter={(tickItem) => parseInt(tickItem).toLocaleString()}
                />
                <Tooltip
                  content={<CustomTooltip />}
                />
                <Bar dataKey={status} fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>

      </div>
    </ThemeProvider>
  );

}
