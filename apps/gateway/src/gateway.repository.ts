import { AbstractRepository } from '@app/common';
import { GatewayDocument } from './models/gateway.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class GatewayRepository extends AbstractRepository<GatewayDocument> {
  protected readonly logger = new Logger(GatewayRepository.name);

  constructor(
    @InjectModel(GatewayDocument.name) gatewayModel: Model<GatewayDocument>,
  ) {
    super(gatewayModel);
  }
}
