import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://anaelisaq:<password>>@anaelisa.xulisaj.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
