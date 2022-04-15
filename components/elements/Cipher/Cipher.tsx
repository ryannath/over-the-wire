import { useState } from "react";
import CaesarCipher from "../CaesarCipher/CaesarCipher";
import SubCipher from "../SubCipher/SubCipher";
import VigCipher from "../VigCipher/VigCipher";
import styles from './Cipher.module.scss';

const Cipher = () => {
  const [cipher, setCipher] = useState(0);
  const [decodedText, setDecodedText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [lastSelected, setLastSelected] = useState(0);

  const attributes = {
    'setEncodedText': setEncodedText,
    'setDecodedText': setDecodedText,
    'encodedText': encodedText,
    'decodedText': decodedText,
    'lastSelected': lastSelected
  }

  let cipherElement = null;
  switch (cipher) {
    case 0:
      cipherElement = <CaesarCipher {...attributes} />
      break;
    case 1:
      cipherElement = <SubCipher {...attributes} />
      break;
    case 2:
      cipherElement = <VigCipher {...attributes}/>
      break;
    default:
      cipherElement = <CaesarCipher {...attributes} />;
  }

  return (
    <div>
      <div className={styles.dropDownContainer}>
        <select className={styles.dropDown} value={cipher} onChange={(e) => setCipher(parseInt(e.target.value))}>
          <option value={0}>Caesar Cipher</option>
          <option value={1}>Substitution Cipher</option>
          <option value={2}>Vigenère Cipher</option>
        </select>
      </div>

      {cipherElement}

      <div className={styles.container}>
        <label>Plain text / decoded</label>
        <textarea
          className={`${styles.textField} ${!lastSelected ? styles.selected : ''}`}
          value={decodedText}
          onSelect={() => setLastSelected(0)}
          onChange={(e) => setDecodedText(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.container}>
        <label>Encrypted</label>
        <textarea
          className={`${styles.textField} ${lastSelected ? styles.selected : ''}`}
          value={encodedText}
          onSelect={() => setLastSelected(1)}
          onChange={(e) => setEncodedText(e.target.value)}
        ></textarea>
      </div>

    </div>
  )
}
export default Cipher