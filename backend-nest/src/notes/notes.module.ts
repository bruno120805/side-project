import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { S3Service } from 'src/services/s3.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, S3Service],
})
export class NotesModule {}
