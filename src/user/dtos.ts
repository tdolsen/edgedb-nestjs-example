import { Field, InputType, ObjectType, OmitType } from "@nestjs/graphql";

@ObjectType("User")
export class UserObject {
	@Field(() => String)
	id!: string;

	@Field(() => String)
	email!: string;
}

@InputType()
export class CreateUserInput extends OmitType(UserObject, ["id"], InputType) {}
