import { createPools } from "../src/services/pools.js";
import { expect } from 'chai'

describe('pools tests', () => {

    it('Should create 1 pool from 2 players', () => {
        const players = ["Ana", "Bob"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(1)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length).to.eql(2)
    });

    it('Should create 2 pools from 6 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(2)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length).to.eql(3)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length).to.eql(3)
    });
});
