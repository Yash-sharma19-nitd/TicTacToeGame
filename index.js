//list of all the variables used here : 
const dialog= document.getElementById('dialog');
const player1name= document.getElementById('player1');
const player2name= document.getElementById('player2');
const board= document.getElementById('gameboard');



var gameboard = new Array();
let player1; 
let player2;
let turn = 0;





//list of all the function :
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


const playGame= function(gameboard, player1, player2,turn)
{
    document.getElementById('start').addEventListener('click',function(e)
    {
    dialog.showModal();
    e.preventDefault();
    document.getElementById('player1Name').innerText=player1name.value ;
    document.getElementById('player2Name').innerText=player2name.value ;
    document.getElementById('reset').addEventListener('click',function()
    {
        gameboardgenerator(gameboard);
        
    });
    })

    const isEmptyBoard = function(gameboard)
    {
    for( let i =0 ;i<3;i++)
    {
        for( let j= 0 ;j<3;j++)
        {
            if( gameboard[i][j]==0) return 1; d
        }
    }
    return 0 ;
}
    
    
    const playerTurn = function(gameboard,turn)
    {
        let symbol  ;
        (turn)?symbol='X':symbol='O';
        board.addEventListener('click',function(e)
        {
            if(e.target.id!='gameboard')
            {
                let [a,b] = e.target.id;
                
                
            }
        })
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
    while(isEmptyBoard(gameboard))
    {
        if(turn)
        {
            document.getElementById('result').textContent = 'player-1 Turn';
        }
        else{document.getElementById('result').textContent = 'player-1 Turn'}
        playerTurn(gameboard,turn);
        windecision(gameboard,turn);
        if( turn === windecision(gameboard,turn))
        {
            console.log(`player-${turn} won`);
            return turn ;
        }
        
        
    }
    console.log('no one won the match is draw')
    
    
    
    
}

playGame(gameboard,player1,player2,turn);