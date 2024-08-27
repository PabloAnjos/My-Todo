import styles from "./styles.module.css";

function Taks(props) {
  return (
    <div className={styles.container}>
      <p
        className={`${styles.title} ${
          props.task.isCompleted && styles.completed
        }`}
      >
        {props.task.id}. {props.task.title}
      </p>

      {/* RENDERIZANDO BUTTON DONE SOMENTE QUANDO A TASK ESTIVER INCOMPLETA */}
      {!props.task.isCompleted && (
        <button
          className={styles.button}
          onClick={() => props.handleCompleteTask(props.task.id)}
        >
          Done
        </button>
      )}
    </div>
  );
}

export default Taks;
