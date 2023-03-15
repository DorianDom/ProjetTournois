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