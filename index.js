var gameboard = new Array();
console.log(gameboard);
const gameboardgenerator = function (gameboard)
{  
    for( let i = 0 ;i<3;i++)
    {
        gamerow= new Array();
        for( let j = 0;j<3;j++)
        {
            gamerow.push(0);
        }
        gameboard.push(gamerow);
    }

}
gameboardgenerator(gameboard);
console.log(gameboard);

let player1; 
let player2;

const playGame= function(gameboad, player1, player2)
{
    
    const isEmptyBoard = function(gameboard)
    {
    for( let i =0 ;i<3;i++)
    {
        for( let j= 0 ;j<3;j++)
        {
            if( gameboard[i][j]==0) return 1; 
        }
    }
    return 0 ;
}
    let turn =0 ;
    
    const playerTurn = function(gameboard,turn)
    {
        let symbol  ;
        (turn)?symbol='X':symbol='O';
        
        //target form the e using the input and then change the gameboard 
        
        
        
    }
    const windecision = function(gameboard,turn)
    {
        let symbol;
        (turn)?symbol = 'X':symbol='O';
        // if(gameboard[0][0]===symbol &&gameboard[0][1]===symbol&& gameboard[0][2]===symbol )
        for(let i = 0 ;i<3;i++)
        {
            if(gameboard[i][0]===symbol &&gameboard[i][1]===symbol&& gameboard[i][2]===symbol ){
                return turn ;
            }
        
        }
        for(let j = 0 ;j<3;i++)
        {
            if(gameboard[0][j]===symbol &&gameboard[1][j]===symbol&& gameboard[2][j]===symbol )
            {
                return turn ;
            }
        
        }
        if( gameboard[0][0]===symbol&&gamboard[1][1]===symbol&& gameboard[2][2]===symbol)   {return turn;}
        else if( gameboard[0][2]===symbol&&gamboard[1][1]===symbol&& gameboard[2][0]===symbol)  { return turn;}
        else
        {
            turn++ ; 
            return turn ;
        }
        
        
        
        
        
    }
    while(isEmptyBoard(gameboad))
    {
        playerTurn(gameboad,turn);
        windecision(gameboard,turn);
        if( turn === windecision(gameboard,turn))
        {
            console.log(`player-${turn} won`);
            return turn ;
        }
        
        
    }
    console.log('no one won the match is draw')
    
    
    
    
}

