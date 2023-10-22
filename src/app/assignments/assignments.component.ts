import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments: Array<{
    id: number;
    name: string;
    subject: string;
    Deadline: Date;
    dueIn?:string;
    cssClass?:string;
  }>;
  dateToday: Date = new Date();
  cssClass: string

  ngOnInit(): void {
    this.assignments = [
      {
        id: 1,
        name: 'Assignment-1',
        subject: 'Web Traffic and Search Engine O',
        Deadline: new Date('2023-10-23'),
      },
      {
        id: 2,
        name: 'Assignment-1',
        subject: 'Advanced Full-Stack Programming',
        Deadline: new Date('2023-10-27'),
      },
      {
        id: 3,
        name: 'Assignment-1',
        subject: 'Programming with .NET',
        Deadline: new Date('2023-10-25'),
      },
      {
        id: 4,
        name: 'Assignment-1',
        subject: 'Advanced Mobile Application Dev',
        Deadline: new Date('2023-10-28'),
      },
      {
        id: 5,
        name: 'Assignment-1',
        subject: 'PHP Programming with MySQL',
        Deadline: new Date('2023-10-24'),
      },
      {
        id: 6,
        name: 'Assignment-1',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-11-02'),
      },
      {
        id: 7,
        name: 'Assignment-1',
        subject: 'Web Technologies',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 8,
        name: 'Assignment-1',
        subject: 'Software Quality Assurance Techn',
        Deadline: new Date('2023-11-03'),
      },
      {
        id: 9,
        name: 'Assignment-1',
        subject: 'Systems Design',
        Deadline: new Date('2023-11-03'),
      },
      {
        id: 10,
        name: 'Assignment-1',
        subject: 'Programming: Database Management',
        Deadline: new Date('2023-10-28'),
      },
      {
        id: 11,
        name: 'Assignment-1',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-10-25'),
      },
      {
        id: 12,
        name: 'Assignment-1',
        subject: 'Systems Development: Concepts and Analysis',
        Deadline: new Date('2023-10-27'),
      },
      {
        id: 13,
        name: 'Assignment-1',
        subject: 'Software Development Techniques',
        Deadline: new Date('2023-10-20'),
      },
      {
        id: 14,
        name: 'Assignment-1',
        subject: 'User Interface Design Principles',
        Deadline: new Date('2023-10-22'),
      },
      {
        id: 15,
        name: 'Assignment-1',
        subject: 'Web Design and Development Principles',
        Deadline: new Date('2023-10-21'),
      },
      {
        id: 16,
        name: 'Assignment-1',
        subject: 'Android Wear Development',
        Deadline: new Date('2023-10-23'),
      },
      {
        id: 17,
        name: 'Assignment-1',
        subject: 'Computer and Application Security',
        Deadline: new Date('2023-10-24'),
      },
      {
        id: 18,
        name: 'Assignment-1',
        subject: 'Mobile Solutions Capstone Project',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 19,
        name: 'Assignment-1',
        subject: 'Entrepreneurship for Mobile Deve',
        Deadline: new Date('2023-11-04'),
      },
      {
        id: 20,
        name: 'Assignment-1',
        subject: 'Emerging Mobile Technologies',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 21,
        name: 'Assignment-1',
        subject: 'Database: SQL',
        Deadline: new Date('2023-11-07'),
      },
      {
        id: 22,
        name: 'Assignment-1',
        subject: 'Co-op and Career Preparation',
        Deadline: new Date('2023-11-02'),
      },
      {
        id: 23,
        name: 'Assignment-1',
        subject: 'Essentials Of Canadian History',
        Deadline: new Date('2023-10-24'),
      },
      {
        id: 24,
        name: 'Assignment-1',
        subject: 'Programming: Microsoft Web Techn',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 25,
        name: 'Assignment-1',
        subject: 'Game Programming with Data Struct',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 26,
        name: 'Assignment-1',
        subject: 'Systems Analysis and Design',
        Deadline: new Date('2023-10-28'),
      },
      {
        id: 27,
        name: 'Assignment-1',
        subject: 'Mathematics for Information Technology',
        Deadline: new Date('2023-10-28'),
      },
      {
        id: 28,
        name: 'Assignment-1',
        subject: 'The Pleasure and Purpose of Music',
        Deadline: new Date('2023-10-26'),
      },
      {
        id: 29,
        name: 'Assignment-1',
        subject: 'Introduction to Data Modelling',
        Deadline: new Date('2023-10-27'),
      },
      {
        id: 30,
        name: 'Assignment-1',
        subject: 'College Reading & Writing Skills',
        Deadline: new Date('2023-10-30'),
      },
    {
        id: 31,
        name: 'Assignment-2',
        subject: 'Web Traffic and Search Engine O',
        Deadline: new Date('2023-11-07'),
      },
      {
        id: 32,
        name: 'Assignment-2',
        subject: 'Advanced Full-Stack Programming',
        Deadline: new Date('2023-11-08'),
      },
      {
        id: 33,
        name: 'Assignment-2',
        subject: 'Programming with .NET',
        Deadline: new Date('2023-11-01'),
      },
      {
        id: 34,
        name: 'Assignment-2',
        subject: 'Advanced Mobile Application Dev',
        Deadline: new Date('2023-11-08'),
      },
      {
        id: 35,
        name: 'Assignment-2',
        subject: 'PHP Programming with MySQL',
        Deadline: new Date('2023-11-11'),
      },
      {
        id: 36,
        name: 'Assignment-2',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-11-18'),
      },
      {
        id: 37,
        name: 'Assignment-2',
        subject: 'Web Technologies',
        Deadline: new Date('2023-11-17'),
      },
      {
        id: 38,
        name: 'Assignment-2',
        subject: 'Software Quality Assurance Techn',
        Deadline: new Date('2023-11-15'),
      },
      {
        id: 39,
        name: 'Assignment-2',
        subject: 'Systems Design',
        Deadline: new Date('2023-11-07'),
      },
      {
        id: 40,
        name: 'Assignment-2',
        subject: 'Programming: Database Management',
        Deadline: new Date('2023-11-10'),
      },
      {
        id: 41,
        name: 'Assignment-2',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-11-03'),
      },
      {
        id: 42,
        name: 'Assignment-2',
        subject: 'Systems Development: Concepts and Analysis',
        Deadline: new Date('2023-11-14'),
      },
      {
        id: 43,
        name: 'Assignment-2',
        subject: 'Software Development Techniques',
        Deadline: new Date('2023-11-07'),
      },
      {
        id: 44,
        name: 'Assignment-2',
        subject: 'User Interface Design Principles',
        Deadline: new Date('2023-11-08'),
      },
      {
        id: 45,
        name: 'Assignment-2',
        subject: 'Web Design and Development Principles',
        Deadline: new Date('2023-11-11'),
      },
      {
        id: 46,
        name: 'Assignment-2',
        subject: 'Android Wear Development',
        Deadline: new Date('2023-11-11'),
      },
      {
        id: 47,
        name: 'Assignment-2',
        subject: 'Computer and Application Security',
        Deadline: new Date('2023-11-01'),
      },
      {
        id: 48,
        name: 'Assignment-2',
        subject: 'Mobile Solutions Capstone Project',
        Deadline: new Date('2023-11-10'),
      },
      {
        id: 49,
        name: 'Assignment-2',
        subject: 'Entrepreneurship for Mobile Deve',
        Deadline: new Date('2023-10-30'),
      },
      {
        id: 50,
        name: 'Assignment-2',
        subject: 'Emerging Mobile Technologies',
        Deadline: new Date('2023-11-04'),
      },
      {
        id: 51,
        name: 'Assignment-2',
        subject: 'Database: SQL',
        Deadline: new Date('2023-11-15'),
      },
      {
        id: 52,
        name: 'Assignment-2',
        subject: 'Co-op and Career Preparation',
        Deadline: new Date('2023-11-12'),
      },
      {
        id: 53,
        name: 'Assignment-2',
        subject: 'Essentials Of Canadian History',
        Deadline: new Date('2023-11-11'),
      },
      {
        id: 54,
        name: 'Assignment-2',
        subject: 'Programming: Microsoft Web Techn',
        Deadline: new Date('2023-11-16'),
      },
      {
        id: 55,
        name: 'Assignment-2',
        subject: 'Game Programming with Data Struct',
        Deadline: new Date('2023-11-17'),
      },
      {
        id: 56,
        name: 'Assignment-2',
        subject: 'Systems Analysis and Design',
        Deadline: new Date('2023-11-18'),
      },
      {
        id: 57,
        name: 'Assignment-2',
        subject: 'Mathematics for Information Technology',
        Deadline: new Date('2023-11-15'),
      },
      {
        id: 58,
        name: 'Assignment-2',
        subject: 'The Pleasure and Purpose of Music',
        Deadline: new Date('2023-11-17'),
      },
      {
        id: 59,
        name: 'Assignment-2',
        subject: 'Introduction to Data Modelling',
        Deadline: new Date('2023-11-07'),
      },
      {
        id: 60,
        name: 'Assignment-2',
        subject: 'College Reading & Writing Skills',
        Deadline: new Date('2023-11-11'),
      },
    
    {
        id: 61,
        name: 'Assignment-3',
        subject: 'Web Traffic and Search Engine O',
        Deadline: new Date('2023-12-07'),
      },
      {
        id: 62,
        name: 'Assignment-3',
        subject: 'Advanced Full-Stack Programming',
        Deadline: new Date('2023-12-08'),
      },
      {
        id: 63,
        name: 'Assignment-3',
        subject: 'Programming with .NET',
        Deadline: new Date('2023-12-01'),
      },
      {
        id: 64,
        name: 'Assignment-3',
        subject: 'Advanced Mobile Application Dev',
        Deadline: new Date('2023-12-08'),
      },
      {
        id: 65,
        name: 'Assignment-3',
        subject: 'PHP Programming with MySQL',
        Deadline: new Date('2023-12-11'),
      },
      {
        id: 66,
        name: 'Assignment-3',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-12-18'),
      },
      {
        id: 67,
        name: 'Assignment-3',
        subject: 'Web Technologies',
        Deadline: new Date('2023-12-17'),
      },
      {
        id: 68,
        name: 'Assignment-3',
        subject: 'Software Quality Assurance Techn',
        Deadline: new Date('2023-12-15'),
      },
      {
        id: 69,
        name: 'Assignment-3',
        subject: 'Systems Design',
        Deadline: new Date('2023-12-07'),
      },
      {
        id: 70,
        name: 'Assignment-3',
        subject: 'Programming: Database Management',
        Deadline: new Date('2023-12-10'),
      },
      {
        id: 71,
        name: 'Assignment-3',
        subject: 'Mobile Application Development',
        Deadline: new Date('2023-12-03'),
      },
      {
        id: 72,
        name: 'Assignment-3',
        subject: 'Systems Development: Concepts and Analysis',
        Deadline: new Date('2023-12-14'),
      },
      {
        id: 73,
        name: 'Assignment-3',
        subject: 'Software Development Techniques',
        Deadline: new Date('2023-12-07'),
      },
      {
        id: 74,
        name: 'Assignment-3',
        subject: 'User Interface Design Principles',
        Deadline: new Date('2023-12-08'),
      },
      {
        id: 75,
        name: 'Assignment-3',
        subject: 'Web Design and Development Principles',
        Deadline: new Date('2023-12-11'),
      },
      {
        id: 76,
        name: 'Assignment-3',
        subject: 'Android Wear Development',
        Deadline: new Date('2023-12-11'),
      },
      {
        id: 77,
        name: 'Assignment-3',
        subject: 'Computer and Application Security',
        Deadline: new Date('2023-12-01'),
      },
      {
        id: 78,
        name: 'Assignment-3',
        subject: 'Mobile Solutions Capstone Project',
        Deadline: new Date('2023-12-10'),
      },
      {
        id: 79,
        name: 'Assignment-3',
        subject: 'Entrepreneurship for Mobile Deve',
        Deadline: new Date('2023-12-30'),
      },
      {
        id: 80,
        name: 'Assignment-3',
        subject: 'Emerging Mobile Technologies',
        Deadline: new Date('2023-12-04'),
      },
      {
        id: 81,
        name: 'Assignment-3',
        subject: 'Database: SQL',
        Deadline: new Date('2023-12-15'),
      },
      {
        id: 82,
        name: 'Assignment-3',
        subject: 'Co-op and Career Preparation',
        Deadline: new Date('2023-12-12'),
      },
      {
        id: 83,
        name: 'Assignment-3',
        subject: 'Essentials Of Canadian History',
        Deadline: new Date('2023-12-11'),
      },
      {
        id: 84,
        name: 'Assignment-3',
        subject: 'Programming: Microsoft Web Techn',
        Deadline: new Date('2023-12-16'),
      },
      {
        id: 85,
        name: 'Assignment-3',
        subject: 'Game Programming with Data Struct',
        Deadline: new Date('2023-12-17'),
      },
      {
        id: 86,
        name: 'Assignment-3',
        subject: 'Systems Analysis and Design',
        Deadline: new Date('2023-12-18'),
      },
      {
        id: 87,
        name: 'Assignment-3',
        subject: 'Mathematics for Information Technology',
        Deadline: new Date('2023-12-15'),
      },
      {
        id: 88,
        name: 'Assignment-3',
        subject: 'The Pleasure and Purpose of Music',
        Deadline: new Date('2023-12-17'),
      },
      {
        id: 89,
        name: 'Assignment-3',
        subject: 'Introduction to Data Modelling',
        Deadline: new Date('2023-12-07'),
      },
      {
        id: 90,
        name: 'Assignment-3',
        subject: 'College Reading & Writing Skills',
        Deadline: new Date('2023-12-11'),
      },
    
    ];
    this.filterRecords();
    this.getdueDays();
  }

  getdueDays(){
    this.assignments.forEach(x=>{
      let dueIn = Math.floor(Math.abs(<any>x.Deadline - <any>this.dateToday) / (1000*60*60*24)); 
      if(dueIn > 0 && dueIn <= 2)
      {
        x.dueIn = "Due In " + dueIn + " days";
        x.cssClass = "text-danger";
      }
      else if(dueIn < 0)
      {
        x.dueIn = "Due " + +dueIn + " days ago";
        x.cssClass = "text-danger";
      }
      else if(dueIn == 0)
      {
        x.dueIn = "Due Today";
        x.cssClass = "text-danger";
      }
      else
      {
        x.dueIn = "Due In " + dueIn + " days";
        x.cssClass = "text-success";
      }
    })
  }

  filterRecords(event?: any){
    let dateAfter7Days = new Date();
    if( event != null && event.target.value != null && event.target.value != undefined)
    {
      dateAfter7Days.setDate(this.dateToday.getDate() + +event.target.value);
    }
    else
    {
      dateAfter7Days.setDate(this.dateToday.getDate() + 7);
    }
    this.assignments = this.assignments.filter(x=>x.Deadline < dateAfter7Days);
  }

}
