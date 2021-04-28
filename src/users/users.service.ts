import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export type User = {
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  //TODO: Do this in a db (mongo)
  private readonly users = [
    {
      userId: 1,
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'john2@gmail.com',
      password: 'changeme',
    },
  ];

  async findOne(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
