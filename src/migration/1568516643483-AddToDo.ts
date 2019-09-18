import {MigrationInterface, QueryRunner} from "typeorm";

export class AddToDo1568516643483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "completed"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "completed" boolean NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "completed"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "completed" TIMESTAMP NOT NULL`, undefined);
    }

}
