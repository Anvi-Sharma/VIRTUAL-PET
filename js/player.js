class Player {
    constructor(){


    }

    //to get a playercount from the database
    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount =data.val();
        })
    }

    //update the playercount in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
        
    }

    update(name){
        var playerIndex= "player"+ playerCount;
        database.ref(playerIndex).set({
            name :name
        })


    }

}