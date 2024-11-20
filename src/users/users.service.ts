import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly connection:Connection){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.connection.query(`SELECT * FROM Users`);
  }

  findOne(id: number) {
    return this.connection.query(`SELECT * FROM Users WHERE UserID= ${id}`);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
