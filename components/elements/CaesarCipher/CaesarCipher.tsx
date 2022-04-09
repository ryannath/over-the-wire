import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import styles from './CaesarCipher.module.scss'

interface AlphabetMap {
  [character: string]: number;
}

const CaesarCipher = () => {
  const ref = useRef(null) as RefObject<HTMLTextAreaElement>;
  const [decodedText, setDecodedText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [offsetShift, setOffsetShift] = useState(0);
  const [lastSelected, setLastSelected] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.select();
  }, [])

  const [alphabetToNum, numToAlphabet] = ((num) => {
    let alphabetMap: AlphabetMap = {};
    let alphabetArray = []
    for (let i = 0; i < num; i++) {
      let character = String.fromCharCode('a'.charCodeAt(0) + i);
      alphabetMap[character] = i;
      alphabetArray[i] = character
    }
    return [alphabetMap, alphabetArray];
  })(26);

  const caesarEncode = (msg: string, offset: number) => {

    msg = msg.toLowerCase();
    let result = [];
    for (let i = 0; i < msg.length; i++) {

      if (!(msg[i] in alphabetToNum)) {
        console.log(i)
        result[i] = msg[i];
      } else {
        let alphabetIndex = alphabetToNum[msg[i]] + offset;
        const len = numToAlphabet.length;
        alphabetIndex = ((alphabetIndex % len) + len) % len;
        result[i] = numToAlphabet[alphabetIndex];
      }
    }
    console.log(result)
    return result.join('');
  };

  const handleEncode = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!offsetShift) setOffsetShift(0);
    setDecodedText(e.target.value);
    const encodedMessage = caesarEncode(e.target.value, offsetShift || 0);
    setEncodedText(encodedMessage);
  }

  const handleDecode = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!offsetShift) setOffsetShift(0);
    setEncodedText(e.target.value);
    const decodedMessage = caesarEncode(e.target.value, -offsetShift || 0);
    setDecodedText(decodedMessage);
  }

  const handleChangeOffset = (e: ChangeEvent<HTMLInputElement>) => {
    let offset = parseInt(e.target.value);
    setOffsetShift(offset);
    if (lastSelected == 0) {
      const encodedMessage = caesarEncode(decodedText, offset || 0);
      setEncodedText(encodedMessage);
    } else {
      const decodedMessage = caesarEncode(encodedText, -offset || 0);
      setDecodedText(decodedMessage);
    }
  }


  return (
    <div>
      <div className={styles.container}>
        <label>Decoded text/plain string</label>
        <div>
          <textarea ref={ref} className={`${styles.textField} ${!lastSelected? styles.selected : ''}`} rows={5} value={decodedText} onChange={handleEncode} onSelect={() => setLastSelected(0)} />
        </div>
      </div>
      <label>Shift</label>
      <div>
        <input type='number' value={offsetShift} onChange={handleChangeOffset}></input>
      </div>
      <div className={styles.container}>
        <label>Encoded string</label>
        <div>
          <textarea className={`${styles.textField} ${lastSelected? styles.selected : ''}`} rows={5} value={encodedText} onChange={handleDecode} onSelect={() => setLastSelected(1)} />
        </div>
      </div>
    </div>
  )
}
export default CaesarCipher