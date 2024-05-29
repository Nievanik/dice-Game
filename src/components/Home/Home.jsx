import Button from '../Button/Button';
import styles from './Home.module.css'

const Home = ({playGame}) => {

  return (
    <div className='container'>

        <div className={`${styles.home}`}>
            <div className= {`${styles.home_image}`}>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className={`${styles.home_text}`}>
                <h1>Dice Game</h1>
                <div className={`${styles.btn_container}`}>
                  <Button text={'Play Now'} action={playGame} isClickable={true}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home;