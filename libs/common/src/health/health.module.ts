import { Module } from '@nestjs/common';
import { HealthController } from '@app/common/health/health.controller';

@Module({
  controller: [HealthController],
})
export class HealthModule {}
