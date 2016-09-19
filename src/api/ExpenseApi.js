import delay from './delay';
import fetch from 'isomorphic-fetch';
import config from '../config';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};
const expense_type=[{
    id:1,name:'Daily'
  },{
    id:2,name:'Monthly'
  },{
    id:3,name:'Yearly'
  }

];
class ExpenseApi {
  static getAllType() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], expense_type));
      }, delay);
    });
  }
  static getAllExpenses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let token ='Bearer '+sessionStorage.getItem('_token');
        // console.log(token);
        // let token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImNyZWF0ZWRfYXQiOiJpbml0IiwidXBkYXRlZF9hdCI6ImluaXQiLCJfX3YiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsImNyZWF0ZWRfYXQiOnRydWUsInVwZGF0ZWRfYXQiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImNyZWF0ZWRfYXQiOiIyMDE2LTA5LTE0VDE0OjU5OjU5LjM3N1oiLCJ1cGRhdGVkX2F0IjoiMjAxNi0wOS0xNFQxNDo1OTo1OS4zNzdaIiwiX192IjowLCJwYXNzd29yZCI6InRlc3RpbmcxMjMiLCJuYW1lIjoiTmljayBDZXJtaW5hcmEiLCJlbWFpbCI6InRlc3RpbmdAdGVzdGluZy5jb20iLCJfaWQiOiI1N2Q5NjVlZmJmNTkyYjQ2OGVlODM3ZWIifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0NzQyNTkxOTUsImV4cCI6MTQ3NDM0NTU5NX0.HxNctS-FEoxypyi7rx_sdDZ-NmysfazESk8N8qE55hA"
        fetch(config.host+`/api/expenses`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=utf-8',
            'Authorization' : token,
            'Accept':'application/json',
            'X-Powered-By':'Express',
          },
        })
            .then((res) => res.json())
            .then((res) => {
              resolve(Object.assign([], res));

            })
            .catch((err)=>{
                reject(err);
            });
      }, delay);
    });
  }
  static saveExpense(expense) {
    expense = Object.assign({}, expense); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minCourseTitleLength = 1;
        // if (expense.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }
        //
        // if (expense.id) {
        //   const existingCourseIndex = courses.findIndex(a => a.id == course.id);
        //   courses.splice(existingCourseIndex, 1, course);
        // } else {
        //   //Just simulating creation here.
        //   //The server would generate ids and watchHref's for new courses in a real app.
        //   //Cloning so copy returned is passed by value rather than by reference.
        //   course.id = generateId(course);
        //   course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
        //   courses.push(course);
        // }
        //
        // resolve(course);
      }, delay);
    });
  }
}

export default ExpenseApi;
