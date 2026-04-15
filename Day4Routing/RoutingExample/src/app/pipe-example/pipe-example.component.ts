import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  standalone: false,
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
})
export class PipeExampleComponent {

  course_name = "dot net angular fullstack";
  start_date = new Date();
  course_fee = 4500;
}
