import { IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  img: string;
}
