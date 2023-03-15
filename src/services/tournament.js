import { writeFile, readFile} from 'node:fs/promises'

export function saveTournaments(tournaments){
    writeFile("./tournaments.json",JSON.stringify(tournaments))
}

export async function loadTournaments(){
    let tournaments = null
    try{
        tournaments = await readFile("./tournaments.json")
    }
    catch(e){
        console.log(e);
        tournaments = "[]"
    }
    if(tournaments == ""){
        tournaments = "[]"
    }
    console.log(tournaments?.toString());
    tournaments = JSON.parse(tournaments)
    return tournaments
    
}
