import { RefObject, useEffect, useState } from "react"
import CaesarCipher from "../CaesarCipher/CaesarCipher";
import styles from './Cipher.module.scss'

const Cipher = () => {
  const [cipher, setCipher] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [lastSelected, setLastSelected] = useState(0);

  return (
    <div>

      <select className={styles.dropDown}>
        <option>Caesar Cipher</option>
      </select>

      <CaesarCipher
        setEncodedText={setEncodedText}
        setDecodedText={setDecodedText}
        encodedText={encodedText}
        decodedText={decodedText}
        lastSelected={lastSelected}
      />

      <div className={styles.container}>
        <label>Plain text / decoded</label>
        <textarea
          className={`${styles.textField} ${!lastSelected? styles.selected : ''}`}
          value={decodedText}
          onSelect={() => setLastSelected(0)}
          onChange={(e) => setDecodedText(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.container}>
        <label>Encrypted</label>
        <textarea
          className={`${styles.textField} ${lastSelected? styles.selected : ''}`}
          value={encodedText}
          onSelect={() => setLastSelected(1)}
          onChange={(e) => setEncodedText(e.target.value)}
        ></textarea>
      </div>

    </div>
  )
}
export default Cipher