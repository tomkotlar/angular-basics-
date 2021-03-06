import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';



@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course
  
  @Input()
  cardIndex: number
  
  @Output()
  courseSelected = new EventEmitter<Course>()


  constructor() { }

  ngOnInit() {
  }

  // @Output example emitter
  onCourseViewed() {
    console.log('clicked')
    this.courseSelected.emit(this.course)
  }

  // ngIf else example
  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  //  [ngClass] example
  cardClasses() {
    //array or without braces string
    if (this.course.category === 'BEGINNER') {
      return ['beginner']
    }
    //object
    // return {'beginner': this.course.category === 'BEGINNER', }
  }

  // [ngStyle] example
  cardStyle() {
    return {'text-decoration': 'underline' }
  }
}
