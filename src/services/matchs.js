export const isPlayed = (match) => {
    return match.sets.length == 3
}

export const getWinner = (match) => {
    const j1 = match.participants[0].id
    const j2 = match.participants[1].id
    const setsJ1 = match.sets.map((s) => {
        const sc1 = s.scores.find((sc) => sc.id === j1)
        const sc2 = s.scores.find((sc) => sc.id === j2)
        return sc1.value > sc2.value || (sc1.value === sc2.value && sc1.tie > sc2.tie) 
    })
    if (setsJ1.filter((s)=> s).length == 2) {
        return match.participants.find((p)=>p.id===j1)
    }
    return match.participants.find((p) => p.id === j1)
}

export const getLoser = (match) => {
    const winner = getWinner(match)
    return match.participants.find((p) => p.id !== winner.id)
}

export const createMatch = (participants, location, date) => {
    return {
        participants,
        date,
        location,
        sets: []
    }
}

export const createSet = (idx, id1, value1,id2,value2,type="classic",tie1=null,tie2=null) => {
    return {
        idx, type, scores: [
            { id: id1, value: value1, tie: tie1 },
            { id: id2, value: value2, tie: tie2 }
        ]
    }
}
