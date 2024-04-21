import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ConfigService } from '@nestjs/config';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // This is an example of a good practive for environment variables
    const port = this.configService.getOrThrow<number>('database.port');
    console.log('port', port);

    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
