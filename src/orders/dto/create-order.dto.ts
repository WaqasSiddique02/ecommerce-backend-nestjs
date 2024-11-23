import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({
        example: 1,
        description: "The ID of the user who placed the order.",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    UserId: number;

    @ApiProperty({
        example: 250.75,
        description: "The total amount for the order.",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    TotalAmount: number;

    @ApiProperty({
        example: "Pending",
        description: "The status of the order (e.g., Pending, Completed, Cancelled).",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    Status: string;
}
