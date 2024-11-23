import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrdersDetailDto {
    @ApiProperty({
        example: 1,
        description: "The ID of the order  placed by the user.",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    OrderId: number;

    @ApiProperty({
        example: 1,
        description: "The ID of the product ordered by the user.",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    ProductId: Number;

    @ApiProperty({
        example: 2,
        description: "The total number of the product.",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    Quantity: number;

    @ApiProperty({
        example: 20.50,
        description: "Price of the product per item",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    UnitPrice: number;

    @ApiProperty({
        example: 20.50,
        description: "Price of the product per item",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    TotalPrice: number;
}
