import { useState } from "react"

export default function Addition(){

    const [state,setState] = useState({
        num1:1,
        num2:2,
        response:"",
        score:0,
        incorrect:false
    });

    function InputUpdate(e){
    
        setState(prev =>({
            ...prev,
            response:e.target.value

        }));
    }

    function CheckData(){

        const answer = parseInt(state.response);
        if(answer === state.num1 + state.num2){

            setState(prevState =>({
                ...prevState,
                num1 : Math.ceil(Math.random() * 10),
                num2 : Math.ceil(Math.random() * 10),
                response : "",
                incorrect : false,
                score : prevState.score + 1
            }));

        }else{

            setState(prevState =>({
                ...prevState,
                response: "",
                incorrect: true,
                score: prevState.score - 1 

            }));
        }
    }

    if(state.score >= 10){
        return(
            <div>
                <div className="winner container  text-white text-center rounded w-75 ">You Win!</div>
            </div>

        );
    }else{
        return (
        <>
            <div className='container'>
                <div className="pcont text-center  ">
                    <div id="heading">Addition</div>
                   
                    <div id='problem' className={state.incorrect ? "incorrect" : ""}>{state.num1} + {state.num2}</div>
                    <div className="input-group w-50 mx-auto">
                        <input onChange={InputUpdate} className="form-control form-control-sm shadow-none"  value={state.response} />
                        <button onClick={CheckData} className="btn btn-primary btn-sm" type='submit'>submit</button>
                    </div>
                    <div id='score'>Score: {state.score}</div>
                </div>
                
            </div>
        </>
    );

    }


    
}