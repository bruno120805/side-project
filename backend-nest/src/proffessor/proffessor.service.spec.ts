import { Test, TestingModule } from '@nestjs/testing';
import { ProffessorService } from './proffessor.service';

describe('ProffessorService', () => {
  let service: ProffessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProffessorService],
    }).compile();

    service = module.get<ProffessorService>(ProffessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
