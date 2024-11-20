import { IsNotEmpty, IsEmail, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: "John Doe", description: "Full name of the user" })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({ example: "john.doe@example.com", description: "Email address of the user" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "hashed_password", description: "Hashed password of the user" })
    @IsNotEmpty()
    @IsString()
    passwordHash: string;

    @ApiProperty({ example: "+1234567890", description: "Phone number of the user" })
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: "123 Street, City, Country", description: "Residential address of the user" })
    @IsNotEmpty()
    @IsString()
    address: string;
}
