import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DatabaseModule.forRoot(), CustomerModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
