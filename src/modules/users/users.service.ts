import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export type User = {
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  //TODO: Could do this in a db (probably mongo) but time ran out
  private users = [
    {
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      email: 'john2@gmail.com',
      password: 'changeme',
    },
  ];

  async findOne(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async addOne(email: string, password: string): Promise<User> {
    console.log(this.users);
    const newUser: User = { email: email, password: password };
    this.users.push(newUser);
    console.log(this.users);
    return newUser;
  }
}
