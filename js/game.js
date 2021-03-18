class Game {
    constructor(){
        
    }

    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val ()
        })


    }
    updateState(state){
        database.ref("/").update({
            gamestate: state
        })
    }

    //gameState 0 when filling the form
    start(){

        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form ();
            form.display();
            
        }

    }

    //gameState 1 when playing the game 
    play(){}

    //gameState 2 when the game ends
    end(){}
}