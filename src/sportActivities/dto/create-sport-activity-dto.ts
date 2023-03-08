import { Field, ID, InterfaceType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateSportActivityDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly ageGroup: string;

  @Field()
  readonly description: string;
}
