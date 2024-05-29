import styles from './Button.module.css' 

const Button = ({action, text, isNumber, isClickable}) => {
  return (
    <button onClick={action} className={isNumber?`${styles.number} ${isClickable?'':`${styles.black}`}`:`${styles.button} ${isClickable?`${styles.black}`:``} `}>
        {text}
    </button>
  )
}

export default Button;