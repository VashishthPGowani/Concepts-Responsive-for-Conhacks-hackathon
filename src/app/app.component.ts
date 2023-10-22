import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DemoWidget';
  assignments: Array<{
    id: number;
    name: string;
    subject: string;
    Deadline: Date;
  }>;

  ngOnInit(): void {
    this.assignments = [
      {
        id: 1,
        name: 'Assignment-1',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-10-23'),
      },
      {
        id: 2,
        name: 'Assignment-2',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-10-30'),
      },
    ];
  }
}
