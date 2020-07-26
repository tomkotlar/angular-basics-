import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

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


//View Child - multiple View Query Configuration Options

// @ViewChild('cardRef1')
// card1: CourseCardComponent

// @ViewChild('cardRef2')
// card2: CourseCardComponent

@ViewChild('cardRef1', {read: ElementRef})
card1: ElementRef

// @ViewChild('container')
// containerDiv: ElementRef;

@ViewChild('courseImage')
courseImage: ElementRef;

constructor() {
  // console.log('card1', this.card1)
}

ngAfterViewInit() {
  // console.log('card1', this.card1) checking when this  component is build in this lifecycle hook
  // console.log('courseImage', this.courseImage) can't templat reference the child outside the template for exampe course-card

}

  onCourseSelected(course: Course) {
      console.log('card1', this.card1)
    //  console.log('card2', this.card2)
    //  console.log('containerDiv', this.containerDiv)
  }
 }
