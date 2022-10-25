import { Injectable } from "@nestjs/common";

import { EdgeDBService } from "~/edgedb";
import e from "~/edgeql";
import { getUserByEmail } from "~/edgeql/queries";

@Injectable()
export class UserService {
	constructor(private readonly $edgedb: EdgeDBService) {}

	async getUser(email: string) {
		return getUserByEmail(this.$edgedb.client, { email });
	}

	async createUser(email: string) {
		await this.$edgedb.query(e.insert(e.User, { email }).unlessConflict((user) => ({ on: user.email })));
		return this.getUser(email);
	}
}
