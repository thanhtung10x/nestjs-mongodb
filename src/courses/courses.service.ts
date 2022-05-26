import { Injectable } from '@nestjs/common';
import Course from './Schema/Course.schema';

@Injectable()
export class CoursesService {
  Course: any = Course;
  async create(course): Promise<any> {
    const newCourse = new this.Course(course);
    return await newCourse.save();
  }

  async findCourses(): Promise<any> {
    return await Course.find({});
  }

  async findOneCourse(id): Promise<any> {
    return await Course.findOne({ _id: id });
  }

  async updateCourse(id, course): Promise<any> {
    return await Course.findOneAndUpdate({ _id: id }, course, { new: true });
  }

  async deleteCourse(id): Promise<any> {
    return await Course.findOneAndDelete({ _id: id });
  }
}
