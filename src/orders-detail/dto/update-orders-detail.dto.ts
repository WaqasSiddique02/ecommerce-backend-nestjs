import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateOrdersDetailDto } from './create-orders-detail.dto';

export class UpdateOrdersDetailDto extends PartialType(CreateOrdersDetailDto) {
    @ApiProperty({
        example: 1,
        description: "The ID of the order  placed by the user.",
        required: true,
    })
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    OrderId: number;

    @ApiProperty({
        example: 1,
        description: "The ID of the product ordered by the user.",
        required: true,
    })
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    ProductId: Number;

    @ApiProperty({
        example: 2,
        description: "The total number of the product.",
        required: true,
    })
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    Quantity: number;

    @ApiProperty({
        example: 20.50,
        description: "Price of the product per item",
        required: true,
    })
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    UnitPrice: number;

    @ApiProperty({
        example: 20.50,
        description: "Price of the product per item",
        required: true,
    })
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    TotalPrice: number;
}
