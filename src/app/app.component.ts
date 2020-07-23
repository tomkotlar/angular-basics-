import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data = {
  //   title: 'angular-basics'
  // }
  // onLogoClicked() {
  //   alert('hello world') 
  // }
  // onKeyUp(newTitle: string){
  //   this.data.title = newTitle
  // }

courses = COURSES
  // coreCourse = COURSES[0]
  // rxjsCourse = COURSES[1]
  // ngrxCourse = COURSES[2]

// cheanging date to use angular date pipe
dateExample = '2020-10-09'
dateChange() {
  let s = this.dateExample.replace(/-/g, ',')
  return  new Date(s)
}
dateChanger = this.dateChange()

// date pipe
startDate = new Date(2020, 0, 24)

// uppercase pipe
title = COURSES[0].description

//price pipe
price = 9.994489233

// % pipe
rate = 0.67

//slice pipe
collection = ['one',  'two', 'three', 'four', 'five']

//key value pairs
course = COURSES[0]






  onCourseSelected(course: Course) {
    console.log('App component', course)
  }
 }
