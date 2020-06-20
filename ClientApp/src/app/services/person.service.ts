import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {}

  async getPerson(): Promise<Person[]> {
    return await this.httpClient.get<Person[]>(`${this.baseUrl}person`).toPromise();
  }

  async addPerson(person: Person): Promise<Person> {
    return await this.httpClient.post<Person>(`${this.baseUrl}person`, person).toPromise();
  }

  async getAllPersons(): Promise<Person[]> {
    return await this.httpClient.get<Person[]>(`${this.baseUrl}person/all`).toPromise();
  }
}
