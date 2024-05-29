import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Main.module.css';
import Warning from '../Warning/Warning';
import { Rules } from '../Rules/Rules';

const Main = () => {
    const [userNumber, setUserNumber] = useState(null);
    const [diceNumber, setDiceNumber] = useState(1);
    const [warning, setWarning] = useState(false);
    const [score, setScore] = useState(0);
    const [rules, setRules] = useState(false);
    // const [needMatchCheck, setNeedMatchCheck] = useState(false);

    
    const selectUserNumbber = (num)=>{
        setWarning(false)
        setUserNumber(num);
    }

    const selectDiceNumbber = ()=>{
        if (!userNumber) {
            return setWarning(true)
        }
        let randNum = Math.floor(Math.random()*6)+1;
        setDiceNumber(randNum);

        if (userNumber === randNum) {
            setScore((prevScore)=>prevScore+5)
        }else{
            setScore((prevScore)=>prevScore-2)
        }

        setUserNumber(null)

        // setNeedMatchCheck(true)
    }
    
    // const checkMatch=()=>{
    //     if (userNumber === diceNumber) {
    //         setScore((prevScore)=>prevScore+5)
    //     }else{
    //         setScore((prevScore)=>prevScore-2)
    //     }
    //     setNeedMatchCheck(false);
    //     setUserNumber(null)
    // }

    // if (needMatchCheck) {
    //     checkMatch()
    // }

    const resetScore = ()=>{
        setScore(0)
    }
    const showRules = ()=>{
        setRules((prevRules)=>!prevRules)
    }

    
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.score_board}`}>
                <div className={`${styles.total_score}`}>
                        <p>{score}</p> Total Score
                </div>

                <div className={`${styles.numbers}`}>
                    {warning?<Warning/>:''}
                    <div>
                        <Button action={()=>selectUserNumbber(1)} text={1} isNumber={true} isClickable={userNumber!==1}/>
                        <Button action={()=>selectUserNumbber(2)} text={2} isNumber={true} isClickable={userNumber!==2}/>
                        <Button action={()=>selectUserNumbber(3)} text={3} isNumber={true} isClickable={userNumber!==3}/>
                        <Button action={()=>selectUserNumbber(4)} text={4} isNumber={true} isClickable={userNumber!==4}/>
                        <Button action={()=>selectUserNumbber(5)} text={5} isNumber={true} isClickable={userNumber!==5}/>
                        <Button action={()=>selectUserNumbber(6)} text={6} isNumber={true} isClickable={userNumber!==6}/>
                    </div>
                    <p>Select Numbers</p>
                </div>
            </div>

            <div className={`${styles.play_ground}`}>

                <button className={`${styles.dice}`} onClick={selectDiceNumbber}>
                    <img src={`/images/dice/dice_${diceNumber}.png`} alt="" />
                    <p>Click on dice to roll</p>
                </button>

                <div className={`${styles.btns}`}>
                    <Button action={resetScore} text={'Reset Score'} isClickable={score!==0}/>
                    <Button action={showRules} text={'How to Play?'} isClickable={!rules}/>
                </div>

                {rules?<Rules/>:''}
                
            </div>
        </div>
    )
}

export default Main;