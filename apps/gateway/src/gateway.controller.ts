import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createGatewayDto: CreateGatewayDto,
    @CurrentUser() user: UserDto,
  ) {
    return await this.gatewayService.create(createGatewayDto, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.gatewayService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return this.gatewayService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateGatewayDto: UpdateGatewayDto,
  ) {
    return this.gatewayService.update(id, updateGatewayDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.gatewayService.remove(id);
  }
}
