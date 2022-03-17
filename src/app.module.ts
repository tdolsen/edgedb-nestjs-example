import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { EdgeDBModule } from "./edgedb";
import { UserModule } from "./user";

@Module({
	imports: [
		EdgeDBModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			debug: true,
			playground: true,
		}),
		UserModule,
	],
})
export class AppModule {}
