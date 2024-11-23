import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { title } from 'process';

@Controller('category')
@ApiTags('Categories')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}

    @Get('all')
    findAll(){
        return this.categoryService.findAll();
    }

    @Get(':id/One')
    findOne(@Param('id') id:string){
        return this.categoryService.findOne(+id);
    }

    @Post()
    @ApiBody({
        description: 'Simple string body',
        schema: {
          type: 'string',
        },
      })
    create(@Body() body){
        return this.categoryService.create(body.name,body.description);
    }

    @Put(':id/update')
    @ApiBody({
        description: 'Simple string body',
        schema: {
          type: 'string',
        },
      })
    update(@Param('id') id:string,@Body() body){
        return this.categoryService.update(+id,body.name,body.description);
    }

    @Delete(':id/delete')
    delete(@Param('id') id:string){
        return this.categoryService.delete(+id);
    }
}
