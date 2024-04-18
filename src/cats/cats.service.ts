import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto'; // Not a good pattern to use DTO here, this should be agnostic of the DTO/Controller

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto): Cat {
    const newCat: Cat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };

    this.cats.push(newCat);

    return newCat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }
}
