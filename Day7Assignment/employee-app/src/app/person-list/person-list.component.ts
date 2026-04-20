import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  persons = [
    { name: 'Aryan', doj: '2022-01-10', salary: 50000, profession: 'developer' },
    { name: 'Riya', doj: '2021-03-15', salary: 70000, profession: 'manager' },
    { name: 'Karan', doj: '2023-07-20', salary: 40000, profession: 'tester' },
    { name: 'Neha', doj: '2020-11-05', salary: 45000, profession: 'hr' },
    { name: 'Amit', doj: '2022-06-18', salary: 55000, profession: 'developer' },
    { name: 'Sneha', doj: '2019-09-25', salary: 80000, profession: 'manager' },
    { name: 'Rahul', doj: '2023-02-12', salary: 38000, profession: 'tester' },
    { name: 'Priya', doj: '2021-12-01', salary: 42000, profession: 'designer' }
  ];

}