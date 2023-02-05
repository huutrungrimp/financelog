import React, { useContext, useState } from "react";
import { dataContext } from "../../assets/data/dataProvider";
import { ThemeProvider, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, IconButton, Typography } from '@mui/material';
import { componentTheme } from "../../assets/styles/mui/styles";
import { Bar, BarChart, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chunkingYear, weekArray } from "../../assets/data/functionsourses";
import CloseIcon from '@mui/icons-material/Close';
import { Col, Row } from "react-bootstrap";

export default function Income() {
  const income = useContext(dataContext)?.income
  console.log(income)
  const [week, setWeek] = useState(2)
  const [period, setPeriod] = useState(1)
  const [showWeeklyTask, setShowWeeklyTask] = useState('none')
  const [showPeriod, setShowPeriod] = useState('none')
  const [customerName, setCustomerName] = useState('HLS')

  const selectedCustomer = new Array()
  const customer = (Object.keys(income).length === 0) ? ('') : (income.map((item: any) => {
    if (Object.keys(item).toString() === customerName) {
      return selectedCustomer.push(item)
    } else {
      return null
    }
  }))

  const weeklyIncome = (Object.keys(income).length === 0) ? ([]) : (selectedCustomer[0]?.[customerName]?.weekly)
  const periodIncome = (weeklyIncome === undefined) ? ([]) : (chunkingYear(weekArray, 2, weeklyIncome))

  const WeeklyTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div tabIndex={0} className='tooltipClass'>
          <p>{`Week: ${payload[0].payload?.week_of_year}`}</p>
          <p>{`Income: ${parseFloat(payload[0].payload?.pay).toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  const BiWeeklyTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div tabIndex={0} className='tooltipClass'>
          <p>{`Period: ${payload[0].payload?.period}`}</p>
          <p>{`Income: ${parseFloat(payload[0].payload?.pay).toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  const selectedWeek = weeklyIncome?.filter((item: any) => item?.week_of_year === week)[0]
  const selectedPeriod: any = periodIncome?.filter((item: any) => item?.period === period)[0]

  return (
    <ThemeProvider theme={componentTheme}>
      <div className="incomeChart">
        <TableContainer className='mb-3 pb-3'>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{
                "& .MuiTableCell-head": {
                  fontSize: "18px",
                  fontWeight: 'bold'
                }
              }}>
                <TableCell>Customers</TableCell>
                <TableCell align="right">Total hours</TableCell>
                <TableCell align="right">Total income</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(income).length === 0 ? (<TableRow></TableRow>) : (income.map((item: any) => (
                <TableRow
                  key={Object.keys(item).toString().replaceAll(' ', '_')}
                  sx={{ 
                    '&:last-child td, &:last-child th': { border: 0 },
                    "&:hover": {
                      backgroundColor: "primary.light",
                      cursor: 'pointer'
                    }
                  }}
                  onClick={() => setCustomerName(Object.keys(item).toString())}
                >

                  <TableCell component="th" scope="row">{Object.keys(item).toString()}</TableCell>
                  <TableCell align="right">{parseFloat(item[Object.keys(item).toString()].total_hours.hours).toFixed(2)}</TableCell>
                  <TableCell align="right">{parseFloat(item[Object.keys(item).toString()].total_pay.pay).toFixed(2)}</TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>

        </TableContainer>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={weeklyIncome}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="week_of_year"
                tick={{ fontSize: '12px' }}
              >
                <Label
                  position='insideBottom'
                  offset={1}
                  value="Week of Year"
                  style={{ fontSize: '80%', fill: 'black', padding: '100px' }}
                />
              </XAxis>
              <YAxis>
                <Label
                  angle={270}
                  position='insideLeft'
                  offset={0}
                  value="Weekly Income ($)"
                  style={{ textAnchor: 'middle', fontSize: '80%', fill: 'black' }}
                />
              </YAxis>
              <Tooltip content={WeeklyTooltip} />
              <Bar dataKey="pay" fill="blue" onClick={(item) => { setShowWeeklyTask('block'); setWeek(item.payload.week_of_year) }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={periodIncome}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="period"
                tick={{ fontSize: '12px' }}
              >
                <Label
                  position='insideBottom'
                  offset={-5}
                  value="Period of year"
                  style={{ fontSize: '80%', fill: 'black', padding: '100px' }}
                />
              </XAxis>
              <YAxis>
                <Label
                  angle={270}
                  position='insideLeft'
                  offset={10}
                  value="Bi-weekly Income ($)"
                  style={{ textAnchor: 'middle', fontSize: '80%', fill: 'black' }}
                />
              </YAxis>
              <Tooltip content={BiWeeklyTooltip} />
              <Bar dataKey="pay" fill="red" onClick={(item) => { setShowPeriod('block'); setPeriod(item.payload.period) }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: showWeeklyTask }} className="weeklyIncome">
          <Box className="d-flex border-bottom border-danger justify-content-between gx-0">
            <Box>
              <Typography variant="h4" color="initial">Earnings of Week {selectedWeek ? selectedWeek.week_of_year : ''}</Typography>
            </Box>
            <IconButton onClick={() => setShowWeeklyTask('none')} >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="gx-0">
            {(selectedWeek === undefined) ? ('') : (
              <Row className="gx-0">
                {
                  Object.keys(selectedWeek).map(i => (
                    <Row className="gx-0" key={i} style={{ borderBottom: '1px solid' }}>
                      <Col style={{ width: '70%', textTransform: 'capitalize' }}>{i.toString().replaceAll('_', ' ')}</Col>
                      <Col style={{ width: '30%', textAlign: 'right' }}>{parseFloat(selectedWeek[i]).toFixed(2)}</Col>
                    </Row>
                  ))
                }
              </Row>
            )}
          </Box>
        </div>
        <div style={{ display: showPeriod }} className="weeklyIncome">
          <Box className="d-flex border-bottom border-danger justify-content-between gx-0">
            <Box>
              <Typography variant="h4" color="initial">Earnings of Period {selectedPeriod ? selectedPeriod.period : ''}</Typography>
            </Box>
            <IconButton onClick={() => setShowPeriod('none')} >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="gx-0">
            {(selectedPeriod === undefined) ? ('') : (
              <Row className="gx-0">
                {
                  Object.keys(selectedPeriod).map(i => (
                    <Row className="gx-0" key={i} style={{ borderBottom: '1px solid' }}>
                      <Col style={{ width: '70%', textTransform: 'capitalize' }}>{i.toString().replaceAll('_', ' ')}</Col>
                      <Col style={{ width: '30%', textAlign: 'right' }}>{parseFloat(selectedPeriod[i]).toFixed(2)}</Col>
                    </Row>
                  ))
                }
              </Row>
            )}
          </Box>
        </div>

      </div>
    </ThemeProvider>
  );
}
