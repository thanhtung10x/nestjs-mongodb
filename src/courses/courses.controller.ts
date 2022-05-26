import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCourseDto } from './Dto/Course.dto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private CoursesService: CoursesService) {}

  @Post('/')
  async create(@Body() createCourseDto: CreateCourseDto) {
    try {
      return await this.CoursesService.create(createCourseDto);
    } catch {
      return new Error('Erorr!');
    }
  }

  @Get('/')
  async findCourses() {
    try {
      return await this.CoursesService.findCourses();
    } catch {
      return new Error('Erorr!');
    }
  }

  @Get('/:courseId')
  async findOneCourse(@Param('courseId') courseId: string) {
    try {
      return await this.CoursesService.findOneCourse(courseId);
    } catch {
      return new Error('Erorr!');
    }
  }

  @Put('/:courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    try {
      return await this.CoursesService.updateCourse(courseId, createCourseDto);
    } catch {
      return new Error('Erorr!');
    }
  }

  @Delete('/:courseId')
  async deleteCourse(
    @Param('courseId') courseId: string,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    try {
      return await this.CoursesService.deleteCourse(courseId);
    } catch {
      return new Error('Erorr!');
    }
  }
}
