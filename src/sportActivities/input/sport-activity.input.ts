import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SportActivityInput {
  @Field()
  readonly name: string;

  @Field()
  readonly ageGroup: string;

  @Field()
  readonly description: string;
}
