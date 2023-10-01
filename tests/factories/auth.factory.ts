import prisma from "@/database/db.connection";
import { PlayerUser } from "@/protocols/user.protocols";
import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

function build(
    nick: string,
    name: string,
    email: string,
    password: string,
    avatarUrl: string | null,
    description: string | null,
    birthday: Date) {

    return prisma.user.create({
        data: {
            email, password,
            player: { create: { nick, name, description, avatarUrl, birthday } }
        },
        include: {
            player: true
        }
    });
}

function random(): PlayerUser {
    return {
        nick: faker.person.firstName(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.string.uuid(),
        description: faker.person.bio(),
        avatarUrl: faker.image.avatar(),
        birthday: new Date("01-01-1999") // FIXME: randomize date
    };
}

function buildRandom() {
    const { email, password, nick, name, description, avatarUrl, birthday } = random();
    return build(nick, name, email, password, avatarUrl, description, birthday);
}

const authFactory = { build, random, buildRandom };
export default authFactory;