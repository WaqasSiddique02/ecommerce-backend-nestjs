import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersDetailService } from './orders-detail.service';
import { CreateOrdersDetailDto } from './dto/create-orders-detail.dto';
import { UpdateOrdersDetailDto } from './dto/update-orders-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders-detail')
@ApiTags("Orders Details")
export class OrdersDetailController {
  constructor(private readonly ordersDetailService: OrdersDetailService) {}

  @Post()
  create(@Body() createOrdersDetailDto: CreateOrdersDetailDto) {
    return this.ordersDetailService.create(createOrdersDetailDto);
  }

  @Get()
  findAll() {
    return this.ordersDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersDetailDto: UpdateOrdersDetailDto) {
    return this.ordersDetailService.update(+id, updateOrdersDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersDetailService.remove(+id);
  }
}
