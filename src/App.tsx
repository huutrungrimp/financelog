
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.scss'
import SignIn from './features/auth/SignIn';
import SignUp from './features/auth/SignUp';
import { existingUser, variables } from './features/assets/data/variables';
import TaskList from './features/finance/tasks/TaskList';
import NavPage from './features/layout/NavPage';
import MainFinance from './features/finance/MainFinance';
import Home from './features/layout/Home';
import MainPage from './features/layout/MainPage';
import FinanceDB from './features/finance/FinanceDB';
import CreateTask from './features/finance/tasks/CreateTask';
import MainTask from './features/finance/tasks/MainTask';
import UpdateTask from './features/finance/tasks/UpdateTask';
import TaskDetail from './features/finance/tasks/TaskDetail';
import SearchTask from './features/finance/tasks/SearchTask';
import MainCustomer from './features/finance/customers/MainCustomer';
import CustomerList from './features/finance/customers/CustomerList';
import AddCustomer from './features/finance/customers/AddCustomer';
import CustomerDetail from './features/finance/customers/CustomerDetail';
import UpdateCustomer from './features/finance/customers/UpdateCustomer';
import DeleteCustomer from './features/finance/customers/DeleteCustomer';
import DeleteTask from './features/finance/tasks/DeleteTask';
import SignOut from './features/auth/SignOut';
import { AgeData, EpiGraph, GenderData, Post, Task } from './interface';
import { DataProvider } from './features/assets/data/dataProvider';
import { AppContextProps } from './interface';
import DashBoardON from './features/covid19/DashBoardON';
import CovidGraphs from './features/covid19/CovidGraphs';
import CasesByAge from './features/covid19/CasesByAge';
import CasesByGender from './features/covid19/CasesByGender';
import Deaths from './features/covid19/Deaths';
import { getDemographyGraphs, getEpiGraph, getIncome, getPosts, getTasks } from './features/assets/data/getData';
import { TaskCalendar } from './features/finance/tasks/TaskCalendar';
import Footer from './features/layout/Footer';
import TaskReminder from './features/finance/tasks/TaskReminder';
import MainPost from './features/posts/MainPost';
import CreatePost from './features/posts/CreatePost';
import PostList from './features/posts/PostList';
import UpdatePost from './features/posts/UpdatePost';
import DeletePost from './features/posts/DeletePost';
import PostDetail from './features/posts/PostDetail';
import Test from './Test';


export function App() {
  const [epiGraph, setEpiGraph] = useState<EpiGraph[]>([])
  const [ageData, setAgeData] = useState<AgeData[]>([])
  const [genderData, setGenderData] = useState<GenderData[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [income, setIncome] = useState('')
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getEpiGraph().then((res) => {
      setEpiGraph(res)
    })
  }, [])

  useEffect(() => {
    getDemographyGraphs().then((res) => {
      setAgeData(res.age);
      setGenderData(res.gender)
    })
  }, [])

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
    })
  }, [])

  useEffect(() => {
    getIncome().then((res) => {
      setIncome(res);
    })
  }, [])

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    })
  }, [])

  const data: AppContextProps = {
    username: existingUser?.username,
    urlbase: variables.urlbase,
    covidData: {
      demographyData: {
        age: ageData,
        gender: genderData
      },
      epiGraph: epiGraph
    },
    tasks: tasks,
    income: income,
    posts: posts
  }

  return (
    <DataProvider value={data}>
      <div id='app' className='App gx-0' data-cy='myapp'>
        <NavPage />
        {/* <Test /> */}
        <TaskReminder />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path={existingUser.username} element={<MainPage />}>
            <Route path="finance" element={<MainFinance />}>
              <Route index element={<FinanceDB />} />
              <Route path='tasks' element={<MainTask />}>
                <Route index element={<TaskList />} />
                <Route path='calendar' element={<TaskCalendar />} />
                <Route path='new' element={<CreateTask />} />
                <Route path=':id' element={<TaskDetail />} />
                <Route path=':id/update' element={<UpdateTask />} />
                <Route path=':id/delete' element={<DeleteTask />} />
                <Route path='search' element={<SearchTask />} />
              </Route>
              <Route path='customers' element={<MainCustomer />}>
                <Route index element={<CustomerList />} />
                <Route path='new' element={<AddCustomer />} />
                <Route path=':id' element={<CustomerDetail />} />
                <Route path=':id/update' element={<UpdateCustomer />} />
                <Route path=':id/delete' element={<DeleteCustomer />} />
                <Route path='search' element={<SearchTask />} />
              </Route>
            </Route>
            <Route path='covid19' element={<DashBoardON />}>
              <Route index element={<CovidGraphs />} />
              <Route path='age' element={<CasesByAge />} />
              <Route path='gender' element={<CasesByGender />} />
              <Route path='deaths' element={<Deaths />} />
            </Route>
            <Route path='posts' element={<MainPost />}>
              <Route path='' element={<PostList />} />
              <Route path=':id' element={<PostDetail />} />
              <Route path=':id/update' element={<UpdatePost />} />
              <Route path=':id/delete' element={<DeletePost />} />
              <Route path='new' element={<CreatePost />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </DataProvider>
  )
}