import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DATABASE } from 'config';
import { AnimalsModule } from './animals/animals.module';

console.log(DATABASE);

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: DATABASE.HOST,
      port: Number(DATABASE.PORT),
      username: DATABASE.USER,
      password: DATABASE.PASS,
      database: DATABASE.NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    AnimalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
