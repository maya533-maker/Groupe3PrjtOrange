import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Boutique} from '../models';
import {BoutiqueRepository} from '../repositories';

export class BoutiqueController {
  constructor(
    @repository(BoutiqueRepository)
    public boutiqueRepository : BoutiqueRepository,
  ) {}

  @post('/boutiques')
  @response(200, {
    description: 'Boutique model instance',
    content: {'application/json': {schema: getModelSchemaRef(Boutique)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boutique, {
            title: 'NewBoutique',
            exclude: ['id'],
          }),
        },
      },
    })
    boutique: Omit<Boutique, 'id'>,
  ): Promise<Boutique> {
    return this.boutiqueRepository.create(boutique);
  }

  @get('/boutiques/count')
  @response(200, {
    description: 'Boutique model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Boutique) where?: Where<Boutique>,
  ): Promise<Count> {
    return this.boutiqueRepository.count(where);
  }

  @get('/boutiques')
  @response(200, {
    description: 'Array of Boutique model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Boutique, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Boutique) filter?: Filter<Boutique>,
  ): Promise<Boutique[]> {
    return this.boutiqueRepository.find(filter);
  }

  @patch('/boutiques')
  @response(200, {
    description: 'Boutique PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boutique, {partial: true}),
        },
      },
    })
    boutique: Boutique,
    @param.where(Boutique) where?: Where<Boutique>,
  ): Promise<Count> {
    return this.boutiqueRepository.updateAll(boutique, where);
  }

  @get('/boutiques/{id}')
  @response(200, {
    description: 'Boutique model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Boutique, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Boutique, {exclude: 'where'}) filter?: FilterExcludingWhere<Boutique>
  ): Promise<Boutique> {
    return this.boutiqueRepository.findById(id, filter);
  }

  @patch('/boutiques/{id}')
  @response(204, {
    description: 'Boutique PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boutique, {partial: true}),
        },
      },
    })
    boutique: Boutique,
  ): Promise<void> {
    await this.boutiqueRepository.updateById(id, boutique);
  }

  @put('/boutiques/{id}')
  @response(204, {
    description: 'Boutique PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() boutique: Boutique,
  ): Promise<void> {
    await this.boutiqueRepository.replaceById(id, boutique);
  }

  @del('/boutiques/{id}')
  @response(204, {
    description: 'Boutique DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.boutiqueRepository.deleteById(id);
  }
}
