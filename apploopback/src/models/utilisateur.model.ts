import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilisateur extends Entity {
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
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  telephone: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  motDePasse: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;


  constructor(data?: Partial<Utilisateur>) {
    super(data);
  }
}

export interface UtilisateurRelations {
  // describe navigational properties here
}

export type UtilisateurWithRelations = Utilisateur & UtilisateurRelations;
