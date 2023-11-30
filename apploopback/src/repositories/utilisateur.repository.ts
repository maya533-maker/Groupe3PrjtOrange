import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OrangedbDataSource} from '../datasources';
import {Utilisateur, UtilisateurRelations} from '../models';

export class UtilisateurRepository extends DefaultCrudRepository<
  Utilisateur,
  typeof Utilisateur.prototype.id,
  UtilisateurRelations
> {
  constructor(
    @inject('datasources.orangedb') dataSource: OrangedbDataSource,
  ) {
    super(Utilisateur, dataSource);
  }
}
