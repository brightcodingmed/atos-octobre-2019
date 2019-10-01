import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.css']
})
export class GitusersComponent implements OnInit {

  users:any[] = [];
  user = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService._getUsers().subscribe((users: any[]) => {
        this.users = users;
        console.log(users);
    })
  }

  searchUser() {
    this.userService._searchUser(this.user).subscribe((users) => {
     this.users = users.items;
     console.log(users);
    })
  }

}
