import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '15955',
      database: 'Tele_Pharmacist',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'dummyjwttoken',
      signOptions: { expiresIn: '9999999h' },
    }),
    OtpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
