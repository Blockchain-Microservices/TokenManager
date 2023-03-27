import { MigrationInterface, QueryRunner } from "typeorm";

export class Token1679944451570 implements MigrationInterface {
    name = 'Token1679944451570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "symbol" text NOT NULL, "supply" integer NOT NULL, "decimals" integer NOT NULL, "address" text, "deployer" text, "createdAt" text NOT NULL DEFAULT now(), "updatedAt" text NOT NULL DEFAULT now(), CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tokens"`);
    }

}
