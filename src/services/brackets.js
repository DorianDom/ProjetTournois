import { writeFile, readFile} from 'node:fs/promises'
import { createMatch,getLoser } from './matchs.js'

export const createBracket = (players) => {
    
    nbJ=players.length;
    
    const bracket = { rounds: [{ name: "final", matches: [] }] }
    if(players.length%2==0){
        for (let index = 0; index < players.length; index += 2) {
            const participants = []
            participants.push(players[index]);
            participants.push(players[index+1]);
            bracket.rounds[0].matches.push(createMatch(participants,null,null))
        }
    }else{
        for (let index = 0; index < players.length+1; index += 2) {
            const participants = []
            participants.push(players[index]);
            participants.push(players[index+1]);
            bracket.rounds[0].matches.push(createMatch(participants,null,null))
        }
    }
    
    return bracket
}

export const createLosersBracket = (bracket) => {
    const matches = bracket.rounds[0].matches
    const losers = []
    for (const match of matches) {
        losers.push(getLoser(match))
    }
    return createBracket(losers)
}