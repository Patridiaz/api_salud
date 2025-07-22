import { ViewEntity, Column } from 'typeorm';

@ViewEntity({ name: 'adolescente_preliminar' })
export class Adolescente {
  @Column({ name: 'Establecimiento' })
  establecimiento: string;

  @Column({ name: 'Curso' })
  curso: string;

  @Column({ name: 'Código sexo' })
  codigoSexo: string;

  @Column({ name: 'Evaluación: Código de atención' })
  codigoAtencion: string;

  @Column({ name: 'Evaluación: Fecha' })
  fechaEvaluacion: Date; // o string si viene como texto

  @Column({ name: 'Evaluación: Lugar de realización' })
  lugarRealizacion: string;

  @Column({ name: 'Sin riesgo' })
  sinRiesgo: string;

  @Column({ name: 'Riesgo en salud sexual y reproductiva' })
  riesgoSaludSexualReproductiva: string;

  @Column({ name: 'Riesgo suicida' })
  riesgoSuicida: string;

  @Column({ name: 'Riesgo social' })
  riesgoSocial: string;

  @Column({ name: 'Riesgo psicoemocional' })
  riesgoPsicoemocional: string;

  @Column({ name: 'Riesgo de violencia' })
  riesgoViolencia: string;

  @Column({ name: 'Riesgo por consumo de sustancias' })
  riesgoConsumoSustancias: string;

  @Column({ name: 'Riesgo de malnutrición por déficit' })
  riesgoMalnutricionDeficit: string;

  @Column({ name: 'Riesgo de malnutrición por exceso' })
  riesgoMalnutricionExceso: string;

  @Column({ name: 'Riesgo por deserción escolar' })
  riesgoDesercionEscolar: string;

  @Column({ name: 'Riesgo por otro motivo' })
  riesgoOtroMotivo: string;
}
