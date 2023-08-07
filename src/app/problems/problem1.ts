/* Intro:

 We are starting a small community of users. For performance
 reasons we have decided to store all users right in the code.
 This way we can provide our developers with more
 user-interaction opportunities. With user-related data, at least.
 All the GDPR-related issues will be solved some other day.
 This would be the basis for our future experiments during
 these exercises.

 Exercise:

 Given the data, define the interface "User" and use it accordingly.

 */

// export type User = unknown;

export interface User {
  age: number,
  name: string,
  occupation: string,
}


export function logPerson(user: User): void {
  console.log(`Problem #1 - ${user.name}, ${user.age}`);
}

export function logRandomPerson(user: User[]): void {
  let userLen: number = user.length
  const randomUser = getRandomInt(0, userLen)
  return console.log(`Problem #2, #3 Random User - ${user[randomUser]?.name}, ${user[randomUser]?.age}`);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Users:');
