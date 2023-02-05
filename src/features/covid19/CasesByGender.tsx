import React, { useContext } from 'react'
import { dataContext } from '../assets/data/dataProvider';
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";

import { } from '../../interface';
import { Box, IconButton, ThemeProvider, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import SquareIcon from '@mui/icons-material/Square';
import { componentTheme } from '../assets/styles/mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

export default function CasesByGender() {

  const genderGraph = useContext(dataContext)?.covidData.demographyData.gender
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div tabIndex={0} className='tooltipClass'>
          <p>{`Date: ${payload[0].payload?.Case_Reported_Date}`}</p>
          <p>Female: {payload[0].payload.female.toLocaleString()}</p>
          <p>Male: {payload[0].payload.male.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    if (payload.length) {
      return (
        <Row className="justify-content-center">
          {payload.map((entry: any) => (
            <Col xs={3} sm lg={2} key={entry.dataKey}>
              <IconButton>
                <SquareIcon sx={{ color: entry.color }} />
              </IconButton>
              <Typography variant="body1" color="initial">{entry.dataKey.charAt(0).toUpperCase() + entry.dataKey.slice(1).toString()}</Typography>
            </Col>
          ))}
        </Row>
      );
    }

    return null;
  };

  return (
    <ThemeProvider theme={componentTheme}>
      <div className='chart'>
        {(Object.keys(genderGraph).length === 0) ? (
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
            data={genderGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis
              dataKey="Case_Reported_Date"
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
            <Bar dataKey='male' fill="green" />
            <Bar dataKey='female' fill="red" />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </ThemeProvider>
  );

}
