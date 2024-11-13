import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  stud = {
    name:"Хитров Павло",
    faculty:"КРКТ",
    group:"ФЕІ-35",
    email:"email@email.com",
    phone:"880005553555"
  }
}
