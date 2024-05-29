import styles from './Rules.module.css'

export const Rules = () => {
  return (
    <div className={`${styles.rules_container}`}>
        <h1>How to Play?</h1>
        <ol>
            <li>Select any number.</li>
            <li>Click on dice to roll.</li>
            <li>If you get the selected number, 5 points will be added to your score.</li>
            <li>Else 2 points will be deduced.</li>
        </ol>
    </div>
  )
}
