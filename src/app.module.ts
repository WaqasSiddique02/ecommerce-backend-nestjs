import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mssql",
    "host": "localhost",
    "port": 1433,
    "username": "waqas",
    "password": "Waqas@1234",
    "database": "EcommerceDB",
    "synchronize": false,
    "extra": {
    "options": {
      "encrypt": false,
      "trustServerCertificate": true
    }
  }
}),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
