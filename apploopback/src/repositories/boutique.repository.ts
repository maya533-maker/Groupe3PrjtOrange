import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OrangedbDataSource} from '../datasources';
import {Boutique, BoutiqueRelations} from '../models';

export class BoutiqueRepository extends DefaultCrudRepository<
  Boutique,
  typeof Boutique.prototype.id,
  BoutiqueRelations
> {
  constructor(
    @inject('datasources.orangedb') dataSource: OrangedbDataSource,
  ) {
    super(Boutique, dataSource);
  }
}
