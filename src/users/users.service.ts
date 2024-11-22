import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly connection: Connection) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.passwordHash, 10); // Hash password
      const query = `INSERT INTO Users (FullName, Email, PasswordHash, PhoneNumber, Address) VALUES (
        '${createUserDto.fullName}',
        '${createUserDto.email}',
        '${hashedPassword}',
        '${createUserDto.phoneNumber}',
        '${createUserDto.address}'
      );`;
      const result = await this.connection.query(query);
      console.log('Insert successful:', result);
      return result;
    } catch (error) {
      console.error('Insert error:', error);
      throw error;
    }
  }

  findAll() {
    return this.connection.query(`SELECT * FROM Users`);
  }

  findOne(id: number) {
    return this.connection.query(`SELECT * FROM Users WHERE UserID= ${id}`);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(updateUserDto.passwordHash, 10); // Hash password
      const query = `UPDATE Users SET 
        FullName='${updateUserDto.fullName}', 
        Email='${updateUserDto.email}', 
        PasswordHash='${hashedPassword}', 
        PhoneNumber='${updateUserDto.phoneNumber}', 
        Address='${updateUserDto.address}' 
        WHERE UserID=${id};`;
      const result = await this.connection.query(query);
      console.log('Update successful:', result);
      return result;
    } catch (error) {
      console.error('Update error:', error);
      throw error;
    }
  }

  remove(id: number) {
    var query = `DELETE FROM Users WHERE UserID=${id};`;
    this.connection.query(query).then(result => console.log("Insert successful:", result))
      .catch(error => {
        console.error("Insert error:", error);
        return error;
      });
  }
}