import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

    Swal.fire({
      title: 'Are you sure to delete this course?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.courses = this.courses.filter((course) => course.id !== id );
        Swal.fire({
          title: 'Course deleted !',
          timer: 3000,
          type: 'success',
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })
   

    //  
   }

}
