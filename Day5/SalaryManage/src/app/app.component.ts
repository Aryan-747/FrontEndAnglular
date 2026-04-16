import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS
import { SalaryService } from './services/salary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ ADD HERE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  salary: number = 0;
  bonus: number = 0;

  constructor(private salaryService: SalaryService) {}

  calculateBonus() {
    this.bonus = this.salaryService.calculateBonus(this.salary);
  }
}