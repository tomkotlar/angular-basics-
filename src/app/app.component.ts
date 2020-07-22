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


  coreCourse = COURSES[0]
  rxjsCourse = COURSES[1]
  ngrxCourse = COURSES[2]


  onCourseSelected(course: Course) {
    console.log('App component', course)
  }
 }
