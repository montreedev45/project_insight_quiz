import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import Login from './pages/auth/LoginPage'
import Register from './pages/auth/RegisterPage'
import Error404 from './pages/Error404Page';
import Error500 from './pages/Error500Page';

import LayoutTeacher from './pages/teacher/LayoutTeacher';
import DashboardTeacher from './pages/teacher/DashboardTeacherPage';
import QuizLibrary from './pages/teacher/Quiz-LibraryPage';
import QuizCreate from './pages/teacher/Quiz-Create'


export default function App() {
  const role = "teacher"


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path={`/${role}/*`} element={<LayoutTeacher />}>
            <Route path="dashboard" element={<DashboardTeacher />} />
            <Route path='quiz-library' element={<QuizLibrary />} />
            <Route path='quiz-library/create' element={<QuizCreate />} />
            <Route path="*" element={<Error404 />} />
            <Route path='500' element={<Error500 />} />
          </Route>

          <Route path="/*" element={<Error404 />} />
          <Route path='/500' element={<Error500 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
