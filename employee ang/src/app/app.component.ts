import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employerpage';
}
