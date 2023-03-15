import { expect } from 'chai'
import { createPlayers } from './util.js';
import { createBracket, createLosersBracket } from '../src/services/brackets.js';

describe('losers bracket builder', () => {

    it('Should build a losers bracket from 4 players', () => {

        let bracket = createBracket(createPlayers(4))
        let losersBracket = createLosersBracket(bracket)
        expect(losersBracket, "bracket").to.not.be.null
        expect(losersBracket.rounds, "rounds").to.be.ok
        expect(losersBracket.rounds).to.be.a('Array')
        expect(losersBracket.rounds.length).to.equal(1)
        expect(losersBracket.rounds[0], "round[0]").to.be.ok
        expect(losersBracket.rounds[0].name, "round name").to.be.ok
        expect(losersBracket.rounds[0].name).to.equal("final")
    });

    it('Should build a losers bracket from 5 players', () => {

        let bracket = createBracket(createPlayers(5))
        let losersBracket = createLosersBracket(bracket)
        expect(losersBracket, "bracket").to.not.be.null
        expect(losersBracket.rounds, "rounds").to.be.ok
        expect(losersBracket.rounds).to.be.a('Array')
        expect(losersBracket.rounds.length).to.equal(2)
        expect(losersBracket.rounds[0], "round[0]").to.be.ok
        expect(losersBracket.rounds[0].name, "round name").to.be.ok
        expect(losersBracket.rounds[0].name).to.equal("prelim")
        expect(losersBracket.rounds[1], "round[1]").to.be.ok
        expect(losersBracket.rounds[1].name, "round name").to.be.ok
        expect(losersBracket.rounds[1].name).to.equal("final")
    });
});

