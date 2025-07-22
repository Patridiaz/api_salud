import { Controller, Get } from '@nestjs/common';
import { AdolescentesService } from './adolescentes.service';

@Controller('adolescentes')
export class AdolescentesController {
  constructor(private readonly service: AdolescentesService) {}

  @Get()
  async getAll() {
    return this.service.obtenerTodos();
  }
}
