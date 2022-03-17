import { Module } from "@nestjs/common";
import { EdgeDBModule } from "~/edgedb";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
	imports: [EdgeDBModule],
	providers: [UserResolver, UserService],
})
export class UserModule {}
