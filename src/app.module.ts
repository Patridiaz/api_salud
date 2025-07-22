import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdolescentesModule } from './adolescentes/adolescentes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.141.168.47',
      port: 3306,
      username: 'educacion_gestion',
      password: 'P2U*hsa1MK2R~£T%]w([',
      database: 'alacern_alacert',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AdolescentesModule,
  ],
})
export class AppModule {}
