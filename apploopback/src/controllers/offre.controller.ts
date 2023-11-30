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
import {Offre} from '../models';
import {OffreRepository} from '../repositories';

export class OffreController {
  constructor(
    @repository(OffreRepository)
    public offreRepository : OffreRepository,
  ) {}

  @post('/offres')
  @response(200, {
    description: 'Offre model instance',
    content: {'application/json': {schema: getModelSchemaRef(Offre)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offre, {
            title: 'NewOffre',
            exclude: ['id'],
          }),
        },
      },
    })
    offre: Omit<Offre, 'id'>,
  ): Promise<Offre> {
    return this.offreRepository.create(offre);
  }

  @get('/offres/count')
  @response(200, {
    description: 'Offre model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Offre) where?: Where<Offre>,
  ): Promise<Count> {
    return this.offreRepository.count(where);
  }

  @get('/offres')
  @response(200, {
    description: 'Array of Offre model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Offre, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Offre) filter?: Filter<Offre>,
  ): Promise<Offre[]> {
    return this.offreRepository.find(filter);
  }

  @patch('/offres')
  @response(200, {
    description: 'Offre PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offre, {partial: true}),
        },
      },
    })
    offre: Offre,
    @param.where(Offre) where?: Where<Offre>,
  ): Promise<Count> {
    return this.offreRepository.updateAll(offre, where);
  }

  @get('/offres/{id}')
  @response(200, {
    description: 'Offre model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Offre, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Offre, {exclude: 'where'}) filter?: FilterExcludingWhere<Offre>
  ): Promise<Offre> {
    return this.offreRepository.findById(id, filter);
  }

  @patch('/offres/{id}')
  @response(204, {
    description: 'Offre PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offre, {partial: true}),
        },
      },
    })
    offre: Offre,
  ): Promise<void> {
    await this.offreRepository.updateById(id, offre);
  }

  @put('/offres/{id}')
  @response(204, {
    description: 'Offre PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() offre: Offre,
  ): Promise<void> {
    await this.offreRepository.replaceById(id, offre);
  }

  @del('/offres/{id}')
  @response(204, {
    description: 'Offre DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.offreRepository.deleteById(id);
  }
}
