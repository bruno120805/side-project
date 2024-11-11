/*
  Warnings:

  - Added the required column `subject` to the `Proffessor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proffessor" ADD COLUMN     "subject" TEXT NOT NULL;
