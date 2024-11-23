import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiProperty({
        example: 1,
        description: "The ID of the user who placed the order. This field is optional for updates.",
        required: false,
    })
    @IsOptional()
    @IsNumber()
    UserId?: number;

    @ApiProperty({
        example: 250.75,
        description: "The total amount for the order. This field is optional for updates.",
        required: false,
    })
    @IsOptional()
    @IsNumber()
    TotalAmount?: number;

    @ApiProperty({
        example: "Completed",
        description: "The updated status of the order (e.g., Pending, Completed, Cancelled). This field is optional for updates.",
        required: false,
    })
    @IsOptional()
    @IsString()
    Status?: string;
}
