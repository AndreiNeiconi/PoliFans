import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import from @angular/common

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule], // 2. Add it to the imports array
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {}
