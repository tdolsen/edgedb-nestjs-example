import { Injectable } from "@nestjs/common";

import { EdgeDBService } from "~/edgedb";
import e from "~/edgeql";

@Injectable()
export class UserService {
	constructor(private readonly $edgedb: EdgeDBService) {}

	async getUser(email: string) {
		return this.$edgedb.query(
			e.select(e.User, (user) => ({
				id: true,
				email: true,
				filter: e.op(user.email, "=", email),
			})),
		);
	}

	async createUser(email: string) {
		await this.$edgedb.query(e.insert(e.User, { email }).unlessConflict((user) => ({ on: user.email })));
		return this.getUser(email);
	}
}
