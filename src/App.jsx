import styles from "./App.module.css";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <div className={styles.AppContainer}>
      <PasswordGenerator />
    </div>
  );
}

export default App;
