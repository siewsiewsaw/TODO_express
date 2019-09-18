import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateToDo1568513031972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "to_do" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "completed" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "completed_at" TIMESTAMP NOT NULL, "notes" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_19d14b861427e18d619639c8f2b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "to_do"`, undefined);
    }

}
