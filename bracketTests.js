import { createBracket } from "./src/services/brackets";
import { expect } from "chai";


describe('[bracketsTests] Test case', () => {
    it('Should create 0 pool from 2 players', () => {
        const players = ["Ana","Bob"]
        const pools = createBracket(players)
        expect(pools).to.be.null

    })
})


describe('[bracketsTests] Test case', () => {
    it('Should create 1 pool from 3 players', () => {
        const players = ["Ana","Bob","Charlie"]
        const pools = createBracket(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(1)
        expect(pools[0]).to.not.be.null
        expect(pools[0]).to.eql(2)
    })
})

describe('[bracketsTests] Test case', () => {
    it('Should create 2 pool from 6 players', () => {
        const players = ["Ana","Bob","Charlie","Dorian","Dylan","Remy"]
        const pools = createBracket(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(2)
        expect(pools[0]).to.not.be.null
        expect(pools[0]).to.eql(3)
        expect(pools[1]).to.not.be.null
        expect(pools[1]).to.eql(3)
    })
})