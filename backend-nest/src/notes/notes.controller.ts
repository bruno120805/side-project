import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Request } from 'express';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  //SUBE VARIOS ARCHIVOS
  @UseGuards(JwtAuthGuard)
  @Post(':professorId/creates-note')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
        files: 5,
      },
    }),
  )
  uploadFilesNotes(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createNoteDto: CreateNoteDto,
    @Param('professorId', ParseUUIDPipe) professorId: string,
    @Req() req: Request,
  ) {
    const userId = req.user['userId'];

    if (!files) throw new BadRequestException('No files uploaded');
    return this.notesService.uploadFilesNotes(
      files,
      createNoteDto,
      userId,
      professorId,
    );
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
