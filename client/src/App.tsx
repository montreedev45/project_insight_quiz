import React from 'react';
import { Navigate } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

import LayoutTeacher from './pages/teacher/Layout';

import DashboardTeacher from './pages/teacher/dashboard/Dashboard';

import QuizLibrary from './pages/teacher/quiz/Quiz';
import QuizDetail from './pages/teacher/quiz/Quiz-Detail';

import Subjects from './pages/teacher/subjects/Subjects';
import SubjectsDetail from './pages/teacher/subjects/Subjects-Detail';
import SubjectsDetailGeneral from './pages/teacher/subjects/Subjects-Detail-general';
import SubjectsDetailTags from './pages/teacher/subjects/Subjects-Detail-tags';
import SubjectsDetailClasses from './pages/teacher/subjects/Subjects-Detail-classes';
import SubjectsDetailQuiz from './pages/teacher/subjects/Subjects-Detail-quiz';
import SubjectsDetailStudents from './pages/teacher/subjects/Subjects-Detail-students';

import Classes from './pages/teacher/classes/Classes';
import ClassesDetail from './pages/teacher/classes/Classes-Detail';
import ClassesDetailGeneral from './pages/teacher/classes/Classes-Detail-general';
import ClassesDetailSubjects from './pages/teacher/classes/Classes-Detail-subjects';
import ClassesDetailQuiz from './pages/teacher/classes/Classes-Detail-quiz';
import ClassesDetailStudents from './pages/teacher/classes/Classes-Detail-students';

import Students from './pages/teacher/students/Students';
import StudentsDetail from './pages/teacher/students/Students-Detail';

import Analytics from './pages/teacher/analytics/Analytics';

import Account from './pages/teacher/account/Account';
import AccountDetailGeneral from './pages/teacher/account/Account-Detail-general';
import AccountDetailSecurity from './pages/teacher/account/Account-Detail-security';
import AccountDetailNotifications from './pages/teacher/account/Account-Detail-notifications';


export default function App() {
  const role = "teacher"
  const subjectId = "010203040506"
  const classId = "010203040506"
  const teacherId = "010203040506"


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
            <Route path='quiz-library/:010203040506' element={<QuizDetail />} />

            <Route path='subjects' element={<Subjects />} />
            <Route path={`subjects/:subjectId/*`} element={<SubjectsDetail />}>
              <Route path='general' element={<SubjectsDetailGeneral />} />
              <Route path='tags' element={<SubjectsDetailTags />} />
              <Route path='classes' element={<SubjectsDetailClasses />} />
              <Route path='quiz' element={<SubjectsDetailQuiz />} />
              <Route path='students' element={<SubjectsDetailStudents />} />
              <Route path="*" element={<Error404 />} />
            </Route>

            <Route path='classes' element={<Classes />} />
            <Route path={`classes/:classId/*`} element={<ClassesDetail />}>
              <Route path='general' element={<ClassesDetailGeneral />} />
              <Route path='subjects' element={<ClassesDetailSubjects />} />
              <Route path='quiz' element={<ClassesDetailQuiz />} />
              <Route path='students' element={<ClassesDetailStudents />} />
              <Route path="*" element={<Error404 />} />
            </Route>

            <Route path='students' element={<Students />} />
            <Route path={`students/:studentId`} element={<StudentsDetail />} />

            <Route path='analytics' element={<Analytics />} />

            <Route path="account" element={<Account />}>
              <Route index element={<Navigate to={`${teacherId}/general`} replace />} />
              <Route path=":teacherId">
                <Route index element={<Navigate to={`general`} replace />} />
                <Route path="general" element={<AccountDetailGeneral />} />
                <Route path="security" element={<AccountDetailSecurity />} />
                <Route path="notifications" element={<AccountDetailNotifications />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Route>

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
