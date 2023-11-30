import {Entity, model, property} from '@loopback/repository';

@model()
export class Offre extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  categorie: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;


  constructor(data?: Partial<Offre>) {
    super(data);
  }
}

export interface OffreRelations {
  // describe navigational properties here
}

export type OffreWithRelations = Offre & OffreRelations;
