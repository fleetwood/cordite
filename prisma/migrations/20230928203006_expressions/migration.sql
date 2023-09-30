/*
  Warnings:

  - Added the required column `description` to the `StatTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `StatTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `StatTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `CastTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `CastTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CastTree` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CharacterStat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "tier" INTEGER NOT NULL DEFAULT 1,
    "maneuver" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StatExpression" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "level" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CharacterCast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "tier" INTEGER NOT NULL DEFAULT 1,
    "maneuver" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CastExpression" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "RequireGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "story" TEXT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "physiqueId" TEXT NOT NULL,
    "finesseId" TEXT NOT NULL,
    "witId" TEXT NOT NULL,
    "intuitionId" TEXT NOT NULL,
    "charismaId" TEXT NOT NULL,
    "earthId" TEXT NOT NULL,
    "waterId" TEXT NOT NULL,
    "fireId" TEXT NOT NULL,
    "airId" TEXT NOT NULL,
    "lifeId" TEXT NOT NULL,
    "lightId" TEXT NOT NULL,
    "spacetimeId" TEXT NOT NULL,
    CONSTRAINT "Character_physiqueId_fkey" FOREIGN KEY ("physiqueId") REFERENCES "CharacterStat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_finesseId_fkey" FOREIGN KEY ("finesseId") REFERENCES "CharacterStat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_witId_fkey" FOREIGN KEY ("witId") REFERENCES "CharacterStat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_intuitionId_fkey" FOREIGN KEY ("intuitionId") REFERENCES "CharacterStat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_charismaId_fkey" FOREIGN KEY ("charismaId") REFERENCES "CharacterStat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_earthId_fkey" FOREIGN KEY ("earthId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_waterId_fkey" FOREIGN KEY ("waterId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_fireId_fkey" FOREIGN KEY ("fireId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_airId_fkey" FOREIGN KEY ("airId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_lifeId_fkey" FOREIGN KEY ("lifeId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_lightId_fkey" FOREIGN KEY ("lightId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_spacetimeId_fkey" FOREIGN KEY ("spacetimeId") REFERENCES "CharacterCast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expression" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "charId" TEXT NOT NULL,
    "statID" TEXT,
    "castID" TEXT,
    CONSTRAINT "Expression_charId_fkey" FOREIGN KEY ("charId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Expression_statID_fkey" FOREIGN KEY ("statID") REFERENCES "StatExpression" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Expression_castID_fkey" FOREIGN KEY ("castID") REFERENCES "CastExpression" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StatTree" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_StatTree" ("createdAt", "id", "updatedAt", "visible") SELECT "createdAt", "id", "updatedAt", "visible" FROM "StatTree";
DROP TABLE "StatTree";
ALTER TABLE "new_StatTree" RENAME TO "StatTree";
CREATE TABLE "new_CastTree" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_CastTree" ("createdAt", "id", "updatedAt", "visible") SELECT "createdAt", "id", "updatedAt", "visible" FROM "CastTree";
DROP TABLE "CastTree";
ALTER TABLE "new_CastTree" RENAME TO "CastTree";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
