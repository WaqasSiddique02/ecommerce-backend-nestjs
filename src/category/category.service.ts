import { Connection } from 'typeorm';
import {Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    constructor(private readonly connection:Connection){}

    findAll(){
        return this.connection.query(`SELECT * FROM Categories`);
    }

    findOne(id:number){
        return this.connection.query(`SELECT * FROM Categories WHERE CategoryID = ${id}`);
    }

    async create(name:string,description:string){
        var query= `INSERT INTO Categories (CategoryName,Description) Values ('${name}','${description}');`;
        await this.connection.query(query).then(result=>{
            console.log("Creation Succesful",result);
            return result;
        }).catch(error=>{
            console.log("Error",error);
            return error;
        });
    }

    async update(id:number,name:string,description:string){
        var query=`UPDATE CATEGORIES SET CategoryName='${name}',Description='${description}' WHERE CategoryID=${id}`;
        await this.connection.query(query).then(result=>{
            console.log("Update Succesfull",result);
            return result;
        }).catch(error=>{
            console.log("Error",error);
            return error;
        });
    }

    delete(id:number){
        var query=`DELETE FROM Categories WHERE CategoryID=${id}`;
        this.connection.query(query).then(result=>{
            console.log("Deletion Succesful",result);
            return result;
        }).catch(error=>{
            console.log("Error",error);
            return error;
        });
    }
}
