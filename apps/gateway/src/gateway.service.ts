import { Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayRepository } from './gateway.repository';

@Injectable()
export class GatewayService {
  constructor(private readonly gatewayRepository: GatewayRepository) {}

  create(createGatewayDto: CreateGatewayDto) {
    return this.gatewayRepository.create({
      ...createGatewayDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.gatewayRepository.find({});
  }

  findOne(_id: string) {
    return this.gatewayRepository.findOne({ _id });
  }

  update(_id: string, updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayRepository.findOneAndUpdate(
      { _id },
      {
        $set: updateGatewayDto,
      },
    );
  }

  remove(_id: string) {
    return this.gatewayRepository.findOneAndDelete({ _id });
  }
}
