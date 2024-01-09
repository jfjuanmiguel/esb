import { Inject, Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayRepository } from './gateway.repository';
import { PAYMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(
    private readonly gatewayRepository: GatewayRepository,
    @Inject(PAYMENTS_SERVICE) paymentsService: ClientProxy,
  ) {}

  async create(createGatewayDto: CreateGatewayDto, userId: string) {
    return this.gatewayRepository.create({
      ...createGatewayDto,
      timestamp: new Date(),
      userId,
    });
  }

  async findAll() {
    return this.gatewayRepository.find({});
  }

  async findOne(_id: string) {
    return this.gatewayRepository.findOne({ _id });
  }

  async update(_id: string, updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayRepository.findOneAndUpdate(
      { _id },
      {
        $set: updateGatewayDto,
      },
    );
  }

  async remove(_id: string) {
    return this.gatewayRepository.findOneAndDelete({ _id });
  }
}
