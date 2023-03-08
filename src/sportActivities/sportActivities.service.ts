import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SportActivity, SportActivityDocument } from './sportActivities.schema';
import { SportActivityInput } from './input/sport-activity.input';

@Injectable()
export class SportActivitiesService {
  constructor(
    @InjectModel(SportActivity.name)
    private sportActivityModel: Model<SportActivityDocument>,
  ) {}

  async create(
    createSportActivityDto: SportActivityInput,
  ): Promise<SportActivity> {
    const createdSportActivity = new this.sportActivityModel(
      createSportActivityDto,
    );
    return createdSportActivity.save();
  }

  async findAll(): Promise<SportActivity[]> {
    return this.sportActivityModel.find().exec();
  }
}
