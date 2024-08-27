import { useState } from "react";
import Taks from "./components/Task/Task";
import { useRef } from "react";
import styles from "./App.module.css";

function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  {
    /* ADICIONANDO UMA NOVA TASK NA LISTA */
  }
  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false,
    };

    {
      /* ADICIONANDO NOVA TASK NO ESTADO */
    }
    setTasks([...tasks, newTask]);

    {
      /* LIMPANDO INPUT */
    }
    inputRef.current.value = "";
  }

  {
    /* ADICIONANDO FUNCIONALIDADE DE RISCAR TAREFA AO SER CONCLUIDA */
  }
  function handleCompleteTask(id) {
    const taskIndex = tasks.findIndex((item) => item.id === id);

    if (taskIndex === -1) {
      return;
    }

    const newTask = [...tasks];

    newTask[taskIndex].isCompleted = true;

    setTasks(newTask);
  }

  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>Todo App</h1>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione sua Tarefa"
            ref={inputRef}
          />
          <button className={styles.button} onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className={styles.tasks}>
          {/* RENDERIZANDO CADA ITEM DO ARRAY E RETORNANDO UM COMPONENTE HTML */}
          {tasks.length > 0 &&
            tasks.map((item) => (
              <Taks
                key={item.id}
                task={item}
                handleCompleteTask={handleCompleteTask}
              />
            ))}

          {/* EXIBINDO UMA MENSAGEM QUANDO NAO TIVER NUNHUMA TASK */}
          {!tasks.length && <p>Nenhuma tarefa ainda...🫤</p>}
        </div>
      </main>
    </>
  );
}

export default App;
