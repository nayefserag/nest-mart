import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5433,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Nofa24072001',
    database: process.env.DB_NAME || 'Nest_Mart',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
}
// import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// export const ormConfig: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST ,
//     port: parseInt(process.env.DB_PORT, 10) ,
//     username: process.env.DB_USERNAME || ,
//     password: process.env.DB_PASSWORD || ,
//     database: process.env.DB_NAME || ,
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     synchronize: true
// }
