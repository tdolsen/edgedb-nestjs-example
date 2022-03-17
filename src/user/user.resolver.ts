import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput, UserObject } from "./dtos";

import { UserService } from "./user.service";

@Resolver(() => UserObject)
export class UserResolver {
	constructor(private readonly $user: UserService) {}

	@Query(() => UserObject, { nullable: true })
	async getUser(@Args("email") email: string): Promise<UserObject | null> {
		return this.$user.getUser(email);
	}

	@Mutation(() => UserObject)
	async createUser(@Args("input") { email }: CreateUserInput): Promise<UserObject> {
		return this.$user.createUser(email) as unknown as UserObject;
	}
}
