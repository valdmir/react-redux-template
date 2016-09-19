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

class UserApi {
  static auth(user){
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        let formData = new FormData();
        let data=JSON.stringify(user);
        // request
        //   .post('http://localhost:3000/api/auth')
        //   .send(user)
        //   .end(function(err, res){
        //     // Calling the end function will send the request
        //   });
        // console.log(user);
        // let data=JSON.stringify(user);
        //  formData.append('email',user.email);
        //  formData.append('password',user.password);
        //  let client=request.creactClient('http://127.0.0.1:3000/api/');
        //  client.post("post", data,function(err,res,body){
        //    return console.log(res.statusCode);
        //  });

        fetch(config.host+`/api/auth`, {

              method: 'post',
              body: data,

              headers: {
                // 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Content-type': 'application/json; charset=utf-8',
              },
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success==false){
                  reject(res.errors);
                }
                else{
                  let token=res.token;
                  sessionStorage.setItem('_token',token);
                  resolve(res);
                }
            })
            .catch((err)=>{
                reject(err);
            });

        // const minCourseTitleLength = 1;
        // if (user.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }
        //
        // if (user.id) {
        //   const existingCourseIndex = courses.findIndex(a => a.id == course.id);
        //   courses.splice(existingCourseIndex, 1, course);
        // } else {
        //   //Just simulating creation here.
        //   //The server would generate ids and watchHref's for new courses in a real app.
        //   //Cloning so copy returned is passed by value rather than by reference.
        //   user.id = generateId(course);
        //   user.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
        //   courses.push(course);
        // }

        // resolve(course);
      }, delay);
    });
  }

}

export default UserApi;
