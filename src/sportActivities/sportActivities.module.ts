import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SportActivitiesResolver } from './sportActivities.resolver';
import { SportActivity, SportActivitySchema } from './sportActivities.schema';
import { SportActivitiesService } from './sportActivities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SportActivity.name, schema: SportActivitySchema },
    ]),
  ],
  providers: [SportActivitiesResolver, SportActivitiesService],
})
export class SportActivitiesModule {}
