/*
  Warnings:

  - You are about to drop the column `progress` on the `UserProgress` table. All the data in the column will be lost.
  - You are about to drop the `UserTopic` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topicId` to the `UserProgress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserTopic" DROP CONSTRAINT "UserTopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "UserTopic" DROP CONSTRAINT "UserTopic_userId_fkey";

-- AlterTable
ALTER TABLE "UserProgress" DROP COLUMN "progress",
ADD COLUMN     "topicId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserTopic";

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
