import { getLoser, getWinner } from "./matchs.js"

export const getScoreStats = (participant, match) => {
    const stats = {
        nbWins: getWinner(match).id === participant.id ? 1 : 0,
        nbLosses: getLoser(match).id === participant.id ? 1 : 0,
        nbSetsWons: match
    }
    return stats
}

export const createRanking = (matches) => {
    return [{ id: matches[0].participants[0].id, position: 2 }, { id: matches[0].participants[1].id, position: 1 }]
}
