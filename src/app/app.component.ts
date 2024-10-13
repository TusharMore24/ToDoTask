import { Component } from '@angular/core';
import { TodosComponent } from './Task/todos/todos.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],  // Add TodosComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls (plural)
})
export class AppComponent {
  title = 'ToDoTask';
}
