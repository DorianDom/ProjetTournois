import { expect } from 'chai'
import { createBracket } from '../src/services/brackets.js'
import { createPlayers } from './util.js';

describe('brackets builder', () => {

    it('Should build a single round for 2 players', () => {

        let players = createPlayers(2)
        let bracket = createBracket( players)
        expect(bracket,"bracket").to.not.be.null
        expect(bracket.rounds,"rounds").to.be.ok
        expect(bracket.rounds,"rounds").to.be.an('Array')
        expect(bracket.rounds.length).to.equal(1)
        expect(bracket.rounds[0],"round[0]").to.be.ok
        expect(bracket.rounds[0].name, "round  name").to.be.ok
        expect(bracket.rounds[0].name).to.equal("final")
    });

    it('Should build a prelim round for 3 players', () => {

        let players = createPlayers(3)
        let bracket = createBracket(players)
        expect(bracket, "bracket").to.not.be.null
        expect(bracket.rounds, "rounds").to.be.ok
        expect(bracket.rounds).to.be.a('Array')
        expect(bracket.rounds.length).to.equal(2)
        expect(bracket.rounds[0], "round[0]").to.be.ok
        expect(bracket.rounds[0].name, "round name").to.be.ok
        expect(bracket.rounds[0].name).to.equal("prelim")
        expect(bracket.rounds[0].matches, "round matches").to.be.ok
        expect(bracket.rounds[0].matches).to.be.a('Array')
        expect(bracket.rounds[0].matches.length).to.equal(1)
        expect(bracket.rounds[0].matches[0], "round[0] match[0]").to.be.ok
        expect(bracket.rounds[0].matches[0].name, "match name").to.be.ok
        expect(bracket.rounds[0].matches[0].name).to.equal("prelim-#1")
        expect(bracket.rounds[1], "round[1]").to.be.ok
        expect(bracket.rounds[1].name).to.equal("final")
        expect(bracket.rounds[1].matches).to.be.a('Array')
        expect(bracket.rounds[1].matches.length).to.equal(1)
        expect(bracket.rounds[1].matches[0].name).to.equal("final-#1")
    });
});
