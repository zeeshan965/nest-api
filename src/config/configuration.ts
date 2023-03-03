import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const databaseConfigs: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nest-api',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  driver: 'postgres'
};

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: databaseConfigs,
  driver: 'postgres'
});
