import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { mySQLConfiguration } from "@src/database/database.options";

@Module({})
export class DatabaseModule {
	public static async forRoot(): Promise<DynamicModule> {
		return {
			module: DatabaseModule,
			imports: [TypeOrmModule.forRoot(await mySQLConfiguration())]
		};
	}
}
