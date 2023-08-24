import { useState, useEffect } from "react";
import styles from "./PasswordList.module.css";

function PasswordList({ currentPassword }) {
  const [previousPasswords, setPreviousPasswords] = useState([]);

  useEffect(() => {
    // Load passwords from local storage when component mounts
    const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];

    setPreviousPasswords(savedPasswords.slice(0, 5)); // Display only the last 5 passwords

    // If saved password in local storage is 5 then remove the very last password
    if (savedPasswords.length >= 5) {
      savedPasswords.pop();
    }

    // If passwords changes and is not empty, set password to local storage along with previous saved password
    if (currentPassword) {
      localStorage.setItem("passwords",JSON.stringify([currentPassword, ...savedPasswords]));
    }
  }, [currentPassword]);

  return (
    <div className={styles.PasswordList}>
      <div className={styles.PasswordListHeading}>Previous Passwords</div>
      <div className={styles.PreviousPasswordList}>
        <ul>
          {previousPasswords.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PasswordList;
