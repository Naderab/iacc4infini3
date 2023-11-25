import { Component } from '@angular/core';
import { User } from '../core/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
users : User[]=[
  { 
    id:1,
    username:"foulen",
    email:"foulen@gmail.com",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
  },
  { 
    id:2,
    username:"falten",
    email:"falten@gmail.com",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
  }
]

deleteUser(user : User){
//1ere approche
/*let index = this.users.indexOf(user);
if(index !== -1){
  this.users.splice(index,1)
}*/
this.users = this.users.filter((u)=>u.id !== user.id)
}
}
