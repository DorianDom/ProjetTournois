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

    it('Should create 2 pools from 7 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien","Dorian"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(2)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length).to.eql(4)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length).to.eql(3)
    });
    it('Should create 2 pools from 10 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien","Dorian","Paul","Dylan","Remy"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length).to.eql(2)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length).to.eql(5)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length).to.eql(5)
    });

    it('Should create 3 pools from 11 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien","Dorian","Paul","Dylan","Remy","Nicolas"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length,"NB de pool 3").to.eql(3)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length,"NB Joueur 4").to.eql(4)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length,"NB Joueur 4").to.eql(4)
        expect(pools[2]).to.not.be.null
        expect(pools[2].length,"NB Joueur 3").to.eql(3)
    });

    it('Should create 4 pools from 16 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien","Dorian","Paul","Dylan","Remy","Nicolas","12","13","14","15","16"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length,"NB de pool 4").to.eql(4)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length,"NB Joueur 4").to.eql(4)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length,"NB Joueur 4").to.eql(4)
        expect(pools[2]).to.not.be.null
        expect(pools[2].length,"NB Joueur 4").to.eql(4)
        expect(pools[3]).to.not.be.null
        expect(pools[3].length,"NB Joueur 4").to.eql(4)
    });

    it('Should create 4 pools from 18 players', () => {
        const players = ["Ana", "Bob", "Charlie", "Daniel", "Eve", "Fabien","Dorian","Paul","Dylan","Remy","Nicolas","12","13","14","15","16","17","18"]
        const pools = createPools(players)
        expect(pools).to.not.be.null
        expect(pools.length,"NB de pool 4").to.eql(4)
        expect(pools[0]).to.not.be.null
        expect(pools[0].length,"NB Joueur 5").to.eql(5)
        expect(pools[1]).to.not.be.null
        expect(pools[1].length,"NB Joueur 5").to.eql(5)
        expect(pools[2]).to.not.be.null
        expect(pools[2].length,"NB Joueur 4").to.eql(4)
        expect(pools[3]).to.not.be.null
        expect(pools[3].length,"NB Joueur 4").to.eql(4)
    });
});
