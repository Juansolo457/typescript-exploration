import { Component, OnInit } from '@angular/core';
import { logPerson, logRandomPerson, User } from './problems/problem1';
import { filterUsers, Occupation, Person } from './problems/problem11,12';
import { Problem456Service } from './services/problem456.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typescript-exploration';

  /* Angular and Typescript Exploration - Problems:
   Problem #1 - see problem1.ts
   Problem #2 /#3 - add a method on the class User and do the Users log all randomly
   Problem #4, #5, #6 - Upgrade that Problem #1 ts file to a service
   - implement the current methods on the ts file
   problem #7 - TS - type question see problem7.ts
   problem #8, #9 - using same methods on the prob1 ts file:
    add getter / setter + pub sub pattern in problem456 svc
    set in on init and get from svc..
   */

  constructor(private problem456Service: Problem456Service) {
  }

  private users: User[] = [
    {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
    },
    {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
    },
    {
      name: 'Neo',
      age: 25,
      occupation: 'The One'
    },
    {
      name: 'Julius',
      age: 16,
      occupation: 'Orange Julius Guy'
    },
    {
      name: 'John Wick',
      age: 42,
      occupation: 'Renowned Assassin'
    }

  ];

  private persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: Occupation.chimneySweep },
    {
      type: 'admin',
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
    },
    {
      type: 'user',
      name: 'Kate Müller',
      age: 23,
      occupation: Occupation.astronaut
    },
    {
      type: 'admin',
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
    },
    {
      type: 'user',
      name: 'Wilson',
      age: 23,
      occupation: Occupation.ball
    },
    {
      type: 'admin',
      name: 'Agent Smith',
      age: 23,
      role: Occupation.admin
    }
  ];

  public ngOnInit() {
    logPerson(this.users[1])
    logRandomPerson(this.users)
    const resultRandomUserFromSvc: string = this.problem456Service.logRandomPerson(this.users)
    console.log('resultRandomUserFromSvc', resultRandomUserFromSvc);
    // Problem #8
    this.problem456Service.currentUserList = this.users;
    console.log('get from svc0.' +
      ' set' ,this.problem456Service.getCurrentUsers.getValue());
    /*  Problem 13   */
    filterUsers(
      this.persons,
      {
        age: 23
      }
    ).forEach( (usr: User) => {
      this.problem456Service.logPersonFromSvc(usr,13)
    } );
  }

}


