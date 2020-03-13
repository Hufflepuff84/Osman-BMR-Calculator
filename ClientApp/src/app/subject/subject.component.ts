import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {
  public subjects: Subject[];
  public newSubject: Subject = { Name: '', Level: "", Description: "" };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  async ngOnInit() {
    this.subjects = await this.http.get<Subject[]>(this.baseUrl + 'subject').toPromise();
  }
  async save() {
    await this.http.post<Subject[]>(this.baseUrl + 'subject', this.newSubject).toPromise();
    this.newSubject = { Name: '', Level: '', Description: '' };
    this.subjects = await this.http.get<Subject[]>(this.baseUrl + 'subject').toPromise();
    console.log(this.subjects); 
  }


}

interface Subject {
  Name: string;
  Level: string;
  Description: string;
}