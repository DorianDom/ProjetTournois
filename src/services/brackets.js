import { writeFile, readFile} from 'node:fs/promises'

export function createBracket(player){
if(player.lenght<=2){
    return null
}
else if(player.lenght<=5){
    return player
}
else if(player.lenght=6){
    p1=player[0,1,2]
    p2=player[3,4,5]
    return p1,p2
}
else if(player.lenght=7){
    p1=player[0,1,2,3]
    p2=player[4,5,6]
    return p1,p2
}
else if(player.lenght=8){
    p1=player[0,1,2,3]
    p2=player[4,5,6,7]
    return p1,p2
}
}

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