import { OnModuleInit } from "@nestjs/common";
import { createClient } from "edgedb";
import { Expression } from "edgedb/dist/reflection";
import { $infer } from "~/edgeql";

export class EdgeDBService implements OnModuleInit {
	client = createClient();

	async onModuleInit() {
		await this.client.ensureConnected();
	}

	public async query<Expr extends Expression, R = $infer<Expr>>(expression: Expr): Promise<R> {
		return expression.run(this.client);
	}
}
