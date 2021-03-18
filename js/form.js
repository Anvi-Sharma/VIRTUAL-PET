class Form {
    constructor(){

    }

    display(){
        var title=createElement("h1")
        title.html("CAR RACING GAME");
        title.position(100,0);


        var input=createInput("NAME");
        input.position(130,160);

        var button=createButton("PLAY")
        button.position(250,200);
        
        button.mousePressed(function(){
            button.hide()
            input.hide();

            var name= input.value();

            playerCount++;
            player.update(name)
            player.updateCount(playerCount);

            var greeting=createElement("h3");
            greeting.html("Hello "+ name);
            greeting.position(130,160)
        })
    }
}