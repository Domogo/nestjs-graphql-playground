import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSportActivityDto } from './dto/create-sport-activity-dto';
import { SportActivityInput } from './input/sport-activity.input';
import { SportActivitiesService } from './sportActivities.service';

@Resolver()
export class SportActivitiesResolver {
  constructor(private sportActivitiesService: SportActivitiesService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(() => [CreateSportActivityDto])
  async sportActivities() {
    return this.sportActivitiesService.findAll();
  }

  @Mutation(() => CreateSportActivityDto)
  async createSportActivity(@Args('input') input: SportActivityInput) {
    return this.sportActivitiesService.create(input);
  }
}
