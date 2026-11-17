import React from 'react';
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
import QuizCreate from './pages/teacher/quiz/Quiz-Create';

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


export default function App() {
  const role = "teacher"
  const subjectId = "010203040506"
  const classId = "010203040506"


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
            <Route path={`classes/:classId`} element={<ClassesDetail />}>
              <Route path='general' element={<ClassesDetailGeneral />} />
              <Route path='subjects' element={<ClassesDetailSubjects />} />
              <Route path='quiz' element={<ClassesDetailQuiz />} />
              <Route path='students' element={<ClassesDetailStudents />} />
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
