import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OrangedbDataSource} from '../datasources';
import {Offre, OffreRelations} from '../models';

export class OffreRepository extends DefaultCrudRepository<
  Offre,
  typeof Offre.prototype.id,
  OffreRelations
> {
  constructor(
    @inject('datasources.orangedb') dataSource: OrangedbDataSource,
  ) {
    super(Offre, dataSource);
  }
}
