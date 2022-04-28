import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from './country.service';
import { CountryServiceImpl } from './country.service.impl';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryServiceImpl],
    }).compile();

    service = module.get<CountryService>(CountryServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
