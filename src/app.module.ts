import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SocketModule } from './modules/socket/socket.module';

@Module({
  imports: [AuthModule, UsersModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
