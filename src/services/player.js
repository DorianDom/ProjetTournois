

export async function loadPlayer(tournament){

    try{
        tournament = await readFile("./tournaments.json")
    }
    catch(e){
        console.log(e);
        tournaments = "[player]"
    }
    if(tournaments == ""){
        tournaments = "[]"
    }
    console.log(tournaments?.toString());
    tournaments = JSON.parse(tournaments)
    return tournaments
    
    players=[]
    players=tournament[player];
}