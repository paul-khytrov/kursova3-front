import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lecturers',
  standalone: true,
  imports: [
    CommonModule

  ],
  templateUrl: './lecturers.component.html',
  styleUrl: './lecturers.component.css'
})
export class LecturersComponent {


  sendRequest()
  {
    alert("cool")
  }

  lecturers = 
    [
    {
      name:"ХІО",
      department:"КРКТ",
      status:"free"
    },
    {
      name:"Рендзіняк",
      department:"КРКТ",
      status:"taken"
    },
    {
      name:"Благітко",
      department:"КРКТ",
      status:"pending"
    },
    {
      name:"Чмихало",
      department:"КСП",
      status:"free"
    },
    {
      name:"Хмельницький",
      department:"КОІТ",
      status:"free"
    },

  ]

  

}
