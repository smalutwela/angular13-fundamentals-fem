import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. render courses in a list
  // 2. select a course
  // 3. render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'TypeScript Intro',
      description: 'TypeScript Hard Parts',
      percentComplete: 26,
      favorite: true
    }
  ];

  selectedCourse = null;

  txtColor = 'red';

  cssClassName = 'dynamic-classsss';

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course){
    // console.log(this.selectedCourse);
    this.selectedCourse = course;
    // console.log(course);
  }

  deleteCourse(courseId){
    console.log("Delete Course", courseId);
  }

}
