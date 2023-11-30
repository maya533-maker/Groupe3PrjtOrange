import {Entity, model, property} from '@loopback/repository';

@model()
export class Boutique extends Entity {
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
  marque: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  quantite: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;


  constructor(data?: Partial<Boutique>) {
    super(data);
  }
}

export interface BoutiqueRelations {
  // describe navigational properties here
}

export type BoutiqueWithRelations = Boutique & BoutiqueRelations;
