import {CharacterStubInclude, ClassCreateProps,prisma} from "prisma/context";

export const PrismaCharClass = {
  stubs: async () =>
    await prisma.charClass.findMany({
      include: {
        subClasses: true,
        parentClass: true,
        abilities: true,
        _count: {
          select: {
            characters: true
          }
        }
      },
      orderBy: { parentClass: { name: 'asc' } },
    }),

  create: async (data: ClassCreateProps) => prisma.charClass.create({ data }),

  detail: async (slug: string) =>
    await prisma.charClass.findFirst({
      where: {
        name: {
          contains: slug,
          mode: 'insensitive'
      }},
      include: {
        subClasses: true,
        parentClass: true,
        abilities: true,
        characters: CharacterStubInclude,
      }
    })
}