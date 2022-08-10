import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
  ],
})
export class AppModule {}
