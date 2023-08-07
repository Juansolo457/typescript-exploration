import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../problems/problem1';

@Injectable({
  providedIn: 'root'
})
export class Problem456Service {
  public currentUser$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor() {
  }

  public get getCurrentUsers(): BehaviorSubject<User[]> {
    return this.currentUser$;
  }

  public set currentUserList(user: User[]) {
    this.currentUser$.next(user);
  }

  public logPersonFromSvc(user: User): void {
    console.log(`From SVC - Problem #1 - ${user.name}, ${user.age}`);
  }

  public logRandomPerson(user: User[]): string {
    if (user.length === 0) {
      return '';
    }

    const randomUserIndex = this.getRandomInt(0, user.length);
    const randomUser = user[randomUserIndex];
    return `From SVC - Problem #2, #3 Random User - ${randomUser?.name}, ${randomUser?.age}`;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
