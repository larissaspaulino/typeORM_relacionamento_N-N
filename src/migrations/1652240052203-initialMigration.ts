import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1652240052203 implements MigrationInterface {
    name = 'initialMigration1652240052203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "phone" integer, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject_student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subjectId" uuid NOT NULL, "studentId" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e6921e0a19f8c45e0eedcd86181" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" uuid NOT NULL, "name" character varying NOT NULL, "weekly_hours" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subject_student" ADD CONSTRAINT "FK_870de1ef64b989bb959977fa5fc" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subject_student" ADD CONSTRAINT "FK_979bec081eefcda1bbc335582ff" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_student" DROP CONSTRAINT "FK_979bec081eefcda1bbc335582ff"`);
        await queryRunner.query(`ALTER TABLE "subject_student" DROP CONSTRAINT "FK_870de1ef64b989bb959977fa5fc"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "subject_student"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
