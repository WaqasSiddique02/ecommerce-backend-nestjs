import { Injectable } from '@nestjs/common';
import { CreateOrdersDetailDto } from './dto/create-orders-detail.dto';
import { UpdateOrdersDetailDto } from './dto/update-orders-detail.dto';
import { Connection } from 'typeorm';

@Injectable()
export class OrdersDetailService {
  constructor(private readonly connection: Connection) { }

  async create(createOrdersDetailDto: CreateOrdersDetailDto) {
    try {
      const query = `INSERT INTO OrderDetails (OrderID, ProductID,Quantity,UnitPrice) VALUES (
        ${createOrdersDetailDto.OrderId},
        ${createOrdersDetailDto.ProductId},
        ${createOrdersDetailDto.Quantity},
        ${createOrdersDetailDto.UnitPrice}
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
    return this.connection.query(`SELECT * FROM OrderDetails`);
  }

  findOne(id: number) {
    return this.connection.query(`SELECT * FROM OrderDetails WHERE OrderDetailID=${id}`);
  }

  async update(id: number, updateOrdersDetailDto: UpdateOrdersDetailDto) {
    try {
      const query = `UPDATE OrderDetails SET 
        OrderID=${updateOrdersDetailDto.OrderId}, 
        ProductID=${updateOrdersDetailDto.ProductId}, 
        Quantity=${updateOrdersDetailDto.Quantity},
        UnitPrice=${updateOrdersDetailDto.UnitPrice}
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
    var query = `DELETE FROM OrderDetails WHERE OrderDetailID=${id};`;
    this.connection.query(query).then(result => console.log("Delete successful:", result))
      .catch(error => {
        console.error("Delete error:", error);
        return error;
      });
  }
}
