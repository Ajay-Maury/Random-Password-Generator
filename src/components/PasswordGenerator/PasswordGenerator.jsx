import { useState } from "react";
import styles from "./PasswordGenerator.module.css";
import secureRandomPassword from "secure-random-password";
import clipboardCopy from "clipboard-copy";
import PasswordList from "../PasswordList/PasswordList";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [copiedMessage, setCopiedMessage] = useState("");  // set a message to display when user copied password to clipboard

  const generateNewPassword = () => {
    // create config to generate password according to fields selected by user
    const config = [
      ...(includeNumbers ? [secureRandomPassword.digits] : []),
      ...(includeAlphabets ? [secureRandomPassword.upper, secureRandomPassword.lower] : []),
      ...(includeSpecialChars ? [secureRandomPassword.symbols] : [])
    ];

    const options = {
      characters: config,
    };

    const newPassword = secureRandomPassword.randomPassword(options); // generating password by using secure-random-password library
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    clipboardCopy(password);  // copy the password to clipboard using clipboard-copy library
    setCopiedMessage("Password copied to clipboard!");
    setTimeout(() => setCopiedMessage(""), 1000); // Clear the message after 1 seconds
  };

  return (
    <div className={styles.PasswordGeneratorContainer}>
      <div className={styles.PasswordGenerator}>
        <div className={styles.PasswordGenerateHeading}>
          Generate Random Password
        </div>
        <div className={styles.PasswordDisplay}>
          <input
            type="text"
            value={password}
            disabled
            className={styles.PasswordContainer}
            style={password ? { opacity: "1" } : { opacity: "0.6" }}
          />

          <button onClick={copyToClipboard} disabled={!password}>
            Copy to Clipboard
          </button>

          {copiedMessage ? (
            <div className={styles.CopiedMessage}>{copiedMessage}</div>
          ) : (
            <div className={styles.CopiedMessageEmpty}></div>
          )}
        </div>
        <div className={styles.Options}>
          <div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                <span className={styles.OptionText}>Include Numbers</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={includeAlphabets}
                  onChange={() => setIncludeAlphabets(!includeAlphabets)}
                />
                <span className={styles.OptionText}>Include Alphabets</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={includeSpecialChars}
                  onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                />
                <span className={styles.OptionText}>
                  Include Special Characters
                </span>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={generateNewPassword}
          disabled={
            !includeAlphabets && !includeNumbers && !includeSpecialChars
          }
        >
          Generate Password
        </button>
        <div>
          <PasswordList currentPassword={password} />
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
