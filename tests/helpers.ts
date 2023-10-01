import prisma from "../src/database/db.connection";

export async function cleanDB() {
    await prisma.character.deleteMany();
    await prisma.player.deleteMany();
    await prisma.user.deleteMany();
}