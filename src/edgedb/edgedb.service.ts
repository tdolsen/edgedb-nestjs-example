import { OnModuleInit } from "@nestjs/common";
import { $infer, createClient } from "~/edgeql";
import * as T from "~/edgeql/typesystem";

export class EdgeDBService implements OnModuleInit {
	client = createClient();

	async onModuleInit() {
		await this.client.ensureConnected();
	}

	public async query<Expr extends T.Expression>(expression: Expr): Promise<$infer<Expr>> {
		return await expression.run(this.client);
	}
}
