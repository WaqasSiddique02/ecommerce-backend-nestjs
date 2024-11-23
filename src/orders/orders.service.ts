import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly connection:Connection){}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const query = `INSERT INTO Orders (UserID, TotalAmount,Status) VALUES (
        '${createOrderDto.UserId}',
        '${createOrderDto.TotalAmount}',
        '${createOrderDto.Status}'
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
    return this.connection.query(`SELECT * FROM Orders`);
  }

  findOne(id: number) {
    return this.connection.query(`SELECT * FROM Orders WHERE OrderID=${id}`);
  }

  async update(id: number, updateOrderDto:UpdateOrderDto ) {
    try {
      const query = `UPDATE Orders SET 
        UserID='${updateOrderDto.UserId}', 
        TotalAmount='${updateOrderDto.TotalAmount}', 
        Status='${updateOrderDto.Status}'
        WHERE OrderID=${id};`;
      const result = await this.connection.query(query);
      console.log('Update successful:', result);
      return result;
    } catch (error) {
      console.error('Update error:', error);
      throw error;
    }
  }

  remove(id: number) {
    var query = `DELETE FROM Orders WHERE OrderID=${id};`;
    this.connection.query(query).then(result => console.log("Delete successful:", result))
      .catch(error => {
        console.error("Delete error:", error);
        return error;
      });
  }
}
