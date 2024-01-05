import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { GatewayRepository } from './gateway.repository';
import { GatewayDocument, GatewaySchema } from './models/gateway.schema';
import { DatabaseModule, LoggerModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: GatewayDocument.name, schema: GatewaySchema },
    ]),
    LoggerModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService, GatewayRepository],
})
export class GatewayModule {}
