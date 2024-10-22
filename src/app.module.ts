import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivreModule } from './livre/livre.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './livre/livre.entites';
import { User } from './user/user.entites';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Livre,User],
      synchronize: true,
    }),LivreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
