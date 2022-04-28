import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { CountryServiceImpl } from './service/country.service.impl';

describe('CountryController', () => {
  let controller: CountryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryServiceImpl],
    }).compile();

    controller = module.get<CountryController>(CountryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
