import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { getConnectionOptions } from "typeorm";

export const mySQLConfiguration = async (): Promise<TypeOrmModuleOptions> => {
  const defaultConnectionOptions = await getConnectionOptions();
  const customConnectionOptions = {
    type: "mysql",
    entities: [
      "*.entity.ts"
    ]
  };

  return Object.assign(defaultConnectionOptions, customConnectionOptions);
};
