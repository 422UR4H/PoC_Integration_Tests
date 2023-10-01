import app from "@/app";
import supertest from "supertest";
import prisma from "@/database/db.connection";

const api = supertest(app);


beforeEach(() => {
    prisma.player.deleteMany();
});

describe("GET /players/count", () => {
    it("should return the number of players", () => {

        const count = api.get("/players/count");
    });
});

describe("GET /players/find-by", () => {
    describe("when token is valid", () => {

    });
});

describe("PATCH /players", () => {
    describe("when token is valid", () => {

    });
});

describe("DELETE /players", () => {
    describe("when token is valid", () => {

    });
});