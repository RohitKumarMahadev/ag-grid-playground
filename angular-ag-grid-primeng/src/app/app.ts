import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HeaderComponent } from './header/header'; // Import the HeaderComponent

@Component({
  selector: 'app-root',
  imports: [
    AgGridModule,
    ButtonModule,
    ToggleButtonModule,
    CalendarModule,
    FormsModule, // Add FormsModule here
    HeaderComponent // Add HeaderComponent here
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-ag-grid-primeng';

  // AG-Grid properties
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  // PrimeNG component properties
  toggleActive: boolean = false;
  selectedDateRange: Date[] | undefined;
}
