import { Test, TestingModule } from '@nestjs/testing';
import { ProffessorController } from './proffessor.controller';
import { ProffessorService } from './proffessor.service';

describe('ProffessorController', () => {
  let controller: ProffessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProffessorController],
      providers: [ProffessorService],
    }).compile();

    controller = module.get<ProffessorController>(ProffessorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
