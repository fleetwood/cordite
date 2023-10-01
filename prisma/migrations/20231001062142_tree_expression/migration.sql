/*
  Warnings:

  - Added the required column `treeId` to the `CastExpression` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statTreeId` to the `StatExpression` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CastExpression" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "treeId" TEXT NOT NULL,
    CONSTRAINT "CastExpression_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "CastTree" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CastExpression" ("createdAt", "description", "icon", "id", "name", "updatedAt", "visible") SELECT "createdAt", "description", "icon", "id", "name", "updatedAt", "visible" FROM "CastExpression";
DROP TABLE "CastExpression";
ALTER TABLE "new_CastExpression" RENAME TO "CastExpression";
CREATE TABLE "new_StatExpression" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "level" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "statTreeId" TEXT NOT NULL,
    CONSTRAINT "StatExpression_statTreeId_fkey" FOREIGN KEY ("statTreeId") REFERENCES "StatTree" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StatExpression" ("createdAt", "description", "icon", "id", "level", "name", "updatedAt", "visible") SELECT "createdAt", "description", "icon", "id", "level", "name", "updatedAt", "visible" FROM "StatExpression";
DROP TABLE "StatExpression";
ALTER TABLE "new_StatExpression" RENAME TO "StatExpression";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
