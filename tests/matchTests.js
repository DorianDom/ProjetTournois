import { expect } from "chai";
import { createMatch, createSet, getLoser } from "../src/services/matchs.js";
import { inspect } from 'node:util'

describe('match Test case', () => {
    
    it('Should decide a winner and a loser', () => {
        const participants = [{ id: "J1", name: "Ana" },{ id: "J2", name: "Bob" }]
        const match = createMatch(participants, { id: "TC Pau" }, new Date())
        match.sets.push(createSet(1, "J1", 6,"J2",3))
        match.sets.push(createSet(2, "J1", 6, "J2", 6,"classic",5,7))
        match.sets.push(createSet(3, "J1", 10, "J2", 7, "supertie"))
        const loser = getLoser(match)
        expect(loser.name).to.eql("Bob")
    });

    it('Should decide a winner and a loser 2', () => {
        const participants = [{ id: "J1", name: "Dorian" },{ id: "J2", name: "Dylan" }]
        const match = createMatch(participants, { id: "TC Pau" }, new Date())
        match.sets.push(createSet(1, "J1", 3,"J2",6))
        match.sets.push(createSet(2, "J1", 6, "J2", 6,"classic",5,7))
        match.sets.push(createSet(3, "J1", 7, "J2", 10, "supertie"))
        const loser = getLoser(match)
        expect(loser.name).to.eql("Dylan")
    });
});
