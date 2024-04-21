import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './config/configuration';
import { environmentVariablesValidationSchema } from './config/environment-variables-validation-schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: environmentVariablesValidationSchema,
      validationOptions: {
        presence: 'required',
      },
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
