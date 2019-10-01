import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import uid from 'uid';
 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  display = true;
  editable: boolean = false;
  course = {
    id: uid(),
    title: '',
    active: false,
    vote: {like: 0, disLike: 0}
  };

  constructor() { }

   courses: any[] = [
     {id: 1, title: 'Learn Angular', active: false, vote: {like: 9, disLike: 2}},
     {id: 2, title: 'Learn VueJS', active: false, vote: {like: 100, disLike: 0}},
     {id: 3, title: 'Learn Spring', active: true, vote: {like: 80, disLike: 1}},
     {id: 4, title: 'Learn Symfony 4', active: false, vote: {like: 20, disLike: 0}}
   ];

   addCourse() {

  
     this.courses = [this.course, ...this.courses];
     this.initCourse();
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

   editCourse(course) {
     console.log(course);
     this.editable = true;
     this.course = course;
   }

   updateCourse() {
     console.log('updated');
     this.editable = false;
     this.initCourse();
   }

   initCourse() {
    this.course = {
      id: uid(),
      title: '',
      active: false,
      vote: {like: 0, disLike: 0}
    }
   }

   toggleCourse(course) {
     
      course.active = !course.active;
   }

   incLike(course) {
     course.vote.like++; 
   }

   incDisLike(course) {
    course.vote.disLike++; 
  }

  updateLike(data, course){
    if(data.type) {
      course.vote.like = data.value;
    }
    else {
      course.vote.disLike = data.value;
    }
  }

  toggleDisplay() {
    this.display = !this.display;
  }

}
