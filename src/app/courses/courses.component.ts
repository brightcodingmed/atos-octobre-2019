import { Component, OnInit } from '@angular/core';
import uid from 'uid';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  course = null;

  constructor() { }

   courses: any[] = [
     {id: 1, title: 'Learn Angular'},
     {id: 2, title: 'Learn VueJS'},
     {id: 3, title: 'Learn Spring'},
     {id: 4, title: 'Learn Symfony 4'}
   ];

   addCourse() {

    let myCourse = {
      id: uid(10),
      title: this.course
    }
     this.courses = [myCourse, ...this.courses];
     this.course = null;
   }

   deleteCourse(id) {
     this.courses = this.courses.filter((course) => course.id !== id );
   }

}
