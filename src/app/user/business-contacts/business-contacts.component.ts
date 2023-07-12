import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-contacts',
  templateUrl: './business-contacts.component.html',
  styleUrls: ['./business-contacts.component.css']
})
export class BusinessContactsComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.http.get<any[]>('http://localhost:3000/studentInfo').subscribe(
      (data: any[]) => {
        this.students = data;
      },
      (error: any) => {
        console.error('Failed to fetch information', error);
      }
    );
  }

  getContacts() {
    this.http.get<any[]>('http://localhost:3000/studentInfo').subscribe(
      (data: any[]) => {
        this.students = data;
      },
      (error: any) => {
        console.error('Failed to fetch information', error);
      }
    );
  }

  deleteContact(id: string) {
    this.http.delete(`http://localhost:3000/studentInfo/${id}`).subscribe(
      () => {
        console.log('Contact deleted successfully');
        this.getStudents(); // 刷新联系人列表
      },
      (error: any) => {
        console.error('Failed to delete contact', error);
      }
    );
  }

  addContact() {
    const newContact = {
      name: 'John Doe',
      age: 25,
      major: 'Computer Science'
    };

    this.http.post('http://localhost:3000/studentInfo', newContact).subscribe(
      (data: any) => {
        console.log('Contact added successfully');
        this.getStudents(); // 刷新联系人列表
      },
      (error: any) => {
        console.error('Failed to add contact', error);
      }
    );
  }

  updateContact(id: string) {
    const updatedStudent = {
      name: 'Updated Name',
      age: 30,
      major: 'Updated Major'
    };

    this.http.put(`http://localhost:3000/studentInfo/${id}`, updatedStudent).subscribe(
      () => {
        console.log('Contact updated successfully');
        this.getStudents(); // 刷新联系人列表
      },
      (error: any) => {
        console.error('Failed to update contact', error);
      }
    );
  }
}