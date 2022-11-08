import { useState } from "react";
// import './index.css';

let Game = ()=>{

    const [player , setPlayer ] = useState(1);

    let [points  , setPoints] = useState( [ undefined , undefined , undefined ,
                undefined , undefined , undefined ,
                undefined , undefined , undefined ]);


    let [winner , setWinner] = useState(null);
   

    let displayVal = (elementId)=>{
        let btn = document.getElementById(elementId);
        if(player==1)
        {
            btn.innerText = "X";
            let newArr = points;
            newArr[elementId-1] = "X";
            setPoints(newArr);
            setPlayer(2);
        }
        else
        {
            btn.innerText = "O";
            let newArr = points;
            newArr[elementId-1] = "O";
            setPoints(newArr);
            setPlayer(1);
        }

        handleWinner();
    }

    let handleWinner = ()=>{
        if(
            (points[0]=="X" && points[1]=="X" && points[2]=="X") ||
            (points[3]=="X" && points[4]=="X" && points[5]=="X") ||
            (points[6]=="X" && points[7]=="X" && points[8]=="X") ||
            (points[0]=="X" && points[3]=="X" && points[6]=="X") ||
            (points[1]=="X" && points[4]=="X" && points[7]=="X") ||
            (points[2]=="X" && points[5]=="X" && points[8]=="X") ||
            (points[0]=="X" && points[4]=="X" && points[8]=="X") ||
            (points[2]=="X" && points[4]=="X" && points[6]=="X")
        )
        {
            setWinner(1);
        }
        else if(
            (points[0]=="O" && points[1]=="O" && points[2]=="O") ||
            (points[3]=="O" && points[4]=="O" && points[5]=="O") ||
            (points[6]=="O" && points[7]=="O" && points[8]=="O") ||
            (points[0]=="O" && points[3]=="O" && points[6]=="O") ||
            (points[1]=="O" && points[4]=="O" && points[7]=="O") ||
            (points[2]=="O" && points[5]=="O" && points[8]=="O") ||
            (points[0]=="O" && points[4]=="O" && points[8]=="O") ||
            (points[2]=="O" && points[4]=="O" && points[6]=="O")
        )
        {
            setWinner(2);
        }
    }

   
    return(
        <div>
            <h1> TIC TAC TOE </h1>
            <hr />
            <div id="gamepad">
                <button onClick={()=>{displayVal(1)}} id="1"></button>
                <button onClick={()=>{displayVal(2)}} id="2"></button>
                <button onClick={()=>{displayVal(3)}} id="3"></button>
                <button onClick={()=>{displayVal(4)}} id="4"></button>
                <button onClick={()=>{displayVal(5)}} id="5"></button>
                <button onClick={()=>{displayVal(6)}} id="6"></button>
                <button onClick={()=>{displayVal(7)}} id="7"></button>
                <button onClick={()=>{displayVal(8)}} id="8"></button>
                <button onClick={()=>{displayVal(9)}} id="9"></button>
            </div>
           {(player==1 && winner==null) && <h1> player X's turn </h1>}
           {(player==2 && winner==null) && <h1> player O's turn </h1>}

           {winner==1 && <h1>Player X won the game</h1>}
           {winner==2 && <h1>Player O won the game</h1>}

        </div>
    )
}
export default Game