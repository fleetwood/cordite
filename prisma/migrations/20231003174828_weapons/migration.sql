-- CreateTable
CREATE TABLE "Melee" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "damage" TEXT NOT NULL,
    "weight" TEXT NOT NULL,

    CONSTRAINT "Melee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ranged" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "damage" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "rof" INTEGER NOT NULL,
    "penalty" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "medRange" INTEGER NOT NULL,
    "longRange" INTEGER NOT NULL,
    "ammo" TEXT NOT NULL,

    CONSTRAINT "Ranged_pkey" PRIMARY KEY ("id")
);
