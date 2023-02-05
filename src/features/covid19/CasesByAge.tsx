import React, { useContext, useEffect, useState } from 'react'
import { PureComponent } from 'react';
import { dataContext } from '../assets/data/dataProvider';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  Surface
} from "recharts";

import { } from '../../interface';
import { createTheme, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ThemeProvider, IconButton, Typography, Box } from '@mui/material';
import moment from 'moment';
import { Col, Image, Row } from 'react-bootstrap';
import Covid19 from '../../assets/images/Covid.png'
import { statusDict } from '../assets/data/variables';
import SquareIcon from '@mui/icons-material/Square';
import { componentTheme } from '../assets/styles/mui/styles';
import CircularProgress from '@mui/material/CircularProgress';


export default function CasesByAge() {

  const ageGraph = useContext(dataContext)?.covidData.demographyData.age
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div tabIndex={0} className='tooltipClass'>
          <p>{`Date: ${payload[0].payload?.case_reported_date}`}</p>
          <p>Age 20s: {payload[0].payload.age_20s.toLocaleString()}</p>
          <p>Age 50s: {payload[0].payload.age_50s.toLocaleString()}</p>
          <p>Age 80s: {payload[0].payload.age_80s.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };


  const CustomLegend = ({ payload }: any) => {
    if (payload.length) {
      return (
        <div>
          <Row className="justify-content-center">
            {payload.map((entry: any) => (
              <Col xs={3} sm lg={2} key={entry.dataKey}>
                <IconButton>
                  <SquareIcon sx={{ color: entry.color }} />
                </IconButton>
                <Typography>{entry.dataKey.charAt(0).toUpperCase() + entry.dataKey.slice(1).toString().replaceAll('_', ' ')}</Typography>
              </Col>
            ))}
          </Row>

        </div>
      );
    }

    return null;
  };

  return (
    <ThemeProvider theme={componentTheme}>
      <div className='chart'>
        {(Object.keys(ageGraph).length === 0) ? (
          <Box className='justify-content-center m-auto w-50'>
            <IconButton>
              <CircularProgress size={30} color="secondary" sx={{ marginRight: '20px' }} />
              <Typography variant="body1" color="initial">Loading data</Typography>              
            </IconButton>
            <Typography variant="h6" color="primary">You might need to clone the full apps from GitHub to see the graphs</Typography>
          </Box>
        ) : ('')}
        <ResponsiveContainer
          width='100%'
          aspect={2}
        >
          <BarChart
            data={ageGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis
              dataKey="case_reported_date"
              // tickFormatter={(tickItem) => moment(tickItem).format('MMM YY')}
              tick={{ fontSize: '12px' }}
            />
            <YAxis
              tick={{ fontSize: '12px' }}
              tickFormatter={(tickItem) => parseInt(tickItem).toLocaleString()}
            />
            <Tooltip
              content={<CustomTooltip />}
            />
            <Legend content={<CustomLegend />} />
            <Bar dataKey={'age_20s'} fill="red" />
            <Bar dataKey={'age_50s'} fill="green" />
            <Bar dataKey={'age_80s'} fill="blue" />
          </BarChart>

        </ResponsiveContainer>
      </div>

    </ThemeProvider>
  );

}
