import { writeFile, readFile} from 'node:fs/promises'

export const createBracket = (players) => {
    
    const bracket = { rounds: [{ name: "final", matches: [] }] }
    for (let index = 0; index < players.length; index += 2) {
        const participants = []
        participants.push(players[index]);
        participants.push(players[index+1]);
        bracket.rounds[0].matches.push(createMatch(participants,null,null))
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