import { expect } from "chai";
import { createMatch, createSet } from "../src/services/matchs.js";
import { createRanking } from "../src/services/ranks.js";

describe('ranker tests', () => {
    
    it('Should rank players', () => {
        const participants = [{ id: "J1", name: "Ana" }, { id: "J2", name: "Bob" }]
        const match = createMatch(participants, { id: "TC Pau" }, new Date())
        match.sets.push(createSet(1, "J1", 6, "J2", 3))
        match.sets.push(createSet(2, "J1", 6, "J2", 6, "classic", 5, 7))
        match.sets.push(createSet(3, "J1", 10, "J2", 7, "supertie"))

        const ranking = createRanking([match])
        expect(ranking).to.not.be.null
        expect(ranking).to.be.an('Array')
        const rankAna = ranking.find((r) => r.id === "J1")
        expect(rankAna).to.be.ok
        expect(rankAna.position).to.be.a('Number')
        expect(rankAna.position, "player position").to.eql(1)
        const rankBob = ranking.find((r) => r.id === "J2")
        expect(rankBob).to.be.ok
        expect(rankBob.position).to.be.a('Number')
        expect(rankBob.position, "player position").to.eql(1)
    });
});
