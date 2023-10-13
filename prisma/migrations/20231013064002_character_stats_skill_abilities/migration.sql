/*
  Warnings:

  - You are about to drop the `_char_skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_char_stats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_char_skills" DROP CONSTRAINT "_char_skills_A_fkey";

-- DropForeignKey
ALTER TABLE "_char_skills" DROP CONSTRAINT "_char_skills_B_fkey";

-- DropForeignKey
ALTER TABLE "_char_stats" DROP CONSTRAINT "_char_stats_A_fkey";

-- DropForeignKey
ALTER TABLE "_char_stats" DROP CONSTRAINT "_char_stats_B_fkey";

-- DropTable
DROP TABLE "_char_skills";

-- DropTable
DROP TABLE "_char_stats";

-- CreateTable
CREATE TABLE "CharStat" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "characterId" TEXT NOT NULL,
    "statId" TEXT NOT NULL,

    CONSTRAINT "CharStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharSkill" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "characterId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "CharSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharAbility" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "characterId" TEXT NOT NULL,
    "abilityId" TEXT NOT NULL,

    CONSTRAINT "CharAbility_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CharStat" ADD CONSTRAINT "CharStat_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharStat" ADD CONSTRAINT "CharStat_statId_fkey" FOREIGN KEY ("statId") REFERENCES "Stat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharSkill" ADD CONSTRAINT "CharSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharSkill" ADD CONSTRAINT "CharSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharAbility" ADD CONSTRAINT "CharAbility_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharAbility" ADD CONSTRAINT "CharAbility_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
