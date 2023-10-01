import prisma from "@/database/db.connection";
import faker from "@faker-js/faker";
import { Player } from "@prisma/client";

function build() {
    // return await prisma.player.create({
    //     data: {nick, name, email, password, birthday, avatarUrl, description, }
    // })
}

function createRandom() {

}

const playerFactory = { build, createRandom };