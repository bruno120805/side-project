import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  //TODO: terminar este metodo
  @Post('create-note')
  @UseInterceptors(
    FileInterceptor('files', {
      limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
        files: 2,
      },
    }),
  )
  createNote(
    @UploadedFile() files: Express.Multer.File,
    // @Body() createNoteDto: CreateNoteDto,
  ) {
    if (!files) throw new BadRequestException('No files uploaded');

    return this.notesService.uploadFileNote(files);
    // return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
