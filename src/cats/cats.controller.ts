import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('createCatDto', createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get()
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
