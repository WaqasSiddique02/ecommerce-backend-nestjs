import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsEmail, IsString, IsNumber } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: "Jane Doe", description: "Full name of the user" })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({ example: "jane.doe@example.com", description: "Email address of the user" })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({ example: "new_hashed_password", description: "Updated hashed password of the user" })
    @IsOptional()
    @IsString()
    passwordHash?: string;

    @ApiPropertyOptional({ example: "+0987654321", description: "Updated phone number of the user" })
    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @ApiPropertyOptional({ example: "456 Avenue, New City, New Country", description: "Updated residential address of the user" })
    @IsOptional()
    @IsString()
    address?: string;
}
