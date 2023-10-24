import { ViewModule } from './view/view.module';
import { HomeModule } from './home/home.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { ActivityModule } from './activity/activity.module';
import { LoginModule } from './login/login.module';
import { FacebookModule } from './facebook/facebook.module';
import { GoogleModule } from './google/google.module';
import { WalletModule } from './wallet/wallet.module';
import { TemplateModule } from './template/template.module';
@Module({
  imports: [
    ViewModule,
    HomeModule,
    UsersModule,
    GamesModule,
    ActivityModule,
    LoginModule,
    FacebookModule,
    GoogleModule,
    WalletModule,
    TemplateModule,
  ],
  exports: [
    ViewModule,
    HomeModule,
    UsersModule,
    GamesModule,
    ActivityModule,
    LoginModule,
    FacebookModule,
    GoogleModule,
    WalletModule,
    TemplateModule,
  ],
})
export class CommonModule {}
