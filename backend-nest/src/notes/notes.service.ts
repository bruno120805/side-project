import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/services/s3.service';
import { UpdateNoteDto } from './dto/update-note.dto';
import { v4 } from 'uuid';

@Injectable()
export class NotesService {
  constructor(private readonly s3: S3Service) {}

  //TODO:TERMINAR SERVICIO DE SUBIDA DE ARCHIVOS JUNTO CON TRANSACCION DE PRISMA PARA GUARDAR LA NOTA Y LINKEAR AL PROFESOR
  async uploadFileNote(file: Express.Multer.File) {
    const key: string = v4();
    const uploadedFile = this.s3.upload(file, key);

    try {
    } catch (error) {}
  }

  findAll() {
    return `This action returns all notes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
