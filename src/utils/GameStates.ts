enum GameStates{
    Initial,
    Playing,
    Loading,
    Finished
}

enum GameMode{
    Normal,
    Bazinga
}

const GameStatesHandler = {
    currentGameState : GameStates.Initial,
    OnStateChanged : new Signal(),
    
    ChangeState:(state : GameStates) => {
        try{
            GameStatesHandler.currentGameState = state;
            GameStatesHandler.OnStateChanged.Emit({
                gameState:GameStatesHandler.currentGameState
            })
        }catch{
            throw new Error("Unable to set State")
        }
    }   
}

