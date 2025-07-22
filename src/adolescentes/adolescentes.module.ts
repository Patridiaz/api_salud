// src/adolescentes/adolescentes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdolescentesService } from './adolescentes.service';
import { AdolescentesController } from './adolescentes.controller';
import { Adolescente } from './adolescente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adolescente])], // <--- Aquí registras la entidad para el repositorio
  providers: [AdolescentesService],
  controllers: [AdolescentesController],
})
export class AdolescentesModule {}
