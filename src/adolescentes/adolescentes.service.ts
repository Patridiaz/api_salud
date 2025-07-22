import { Injectable } from '@nestjs/common';
import { Adolescente } from './adolescente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdolescentesService {
  constructor(
    @InjectRepository(Adolescente)
    private readonly repo: Repository<Adolescente>,
  ) {}

  async obtenerTodos(): Promise<Adolescente[]> {
    return this.repo.find();
  }
}
