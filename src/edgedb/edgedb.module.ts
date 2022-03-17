import { Module } from "@nestjs/common";
import { EdgeDBService } from "./edgedb.service";

@Module({
	providers: [EdgeDBService],
	exports: [EdgeDBService],
})
export class EdgeDBModule {}
