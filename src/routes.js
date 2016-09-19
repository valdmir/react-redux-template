import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
// template page
import ChartPage from './components/chart/ChartPage';
import DashboardPage from './components/template/DashboardPage';
import PanelWellPage from './components/template/PanelWellPage';
import ButtonPage from './components/template/ButtonPage';
import TablePage from './components/template/TablePage';
import FormPage from './components/template/FormPage';
import IconPage from './components/template/IconPage';
import NotificationPage from './components/template/NotificationPage';
import TypographyPage from './components/template/TypographyPage';
import BlankPage from './components/template/BlankPage';
// import LoginPage from './components/template/LoginPage';
import LoginPage from './components/user/LoginPage';
import GridPage from './components/template/GridPage';
// Course
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
// Expense
import ExpensesPage from './components/expense/ExpensesPage';
import ManageExpensePage from './components/expense/ManageExpensePage';

export default (
  <Route path="/" component={App}>
    // <IndexRoute component={HomePage}/>
    <IndexRoute component={DashboardPage}/>
    <Route path="index" component={DashboardPage}/>
    <Route path="chart" component={ChartPage}/>
    <Route path="tables" component={TablePage}/>
    <Route path="panel-wells" component={PanelWellPage}/>
    <Route path="buttons" component={ButtonPage}/>
    <Route path="notifications" component={NotificationPage}/>
    <Route path="typographies" component={TypographyPage}/>
    <Route path="grids" component={GridPage}/>
    <Route path="forms" component={FormPage}/>
    <Route path="icons" component={IconPage}/>
    <Route path="blank" component={BlankPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="expenses" component={ExpensesPage}/>
    <Route path="expense" component={ManageExpensePage}/>

  </Route>
);
