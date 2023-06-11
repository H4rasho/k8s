import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal)
    private animalModel: typeof Animal,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    return await this.animalModel.create({ ...createAnimalDto });
  }

  async findAll() {
    return await this.animalModel.findAll();
  }

  async findOne(id: number) {
    return await this.animalModel.findOne({ where: { id } });
  }
}
