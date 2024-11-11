-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "proffessorId" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_proffessorId_fkey" FOREIGN KEY ("proffessorId") REFERENCES "Proffessor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
