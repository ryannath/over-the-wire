import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from './VigCipher.module.scss'

interface AlphabetMap {
  [character: string]: number;
}

// constructs a mapping data structure
const [alphabetToNum, numToAlphabet] = ((num) => {
  let alphabetMap: AlphabetMap = {};
  let alphabetArray: Array<string> = []

  for (let i = 0; i < num; i++) {
    let character = String.fromCharCode('a'.charCodeAt(0) + i);
    alphabetMap[character] = i;
    alphabetArray[i] = character
  }
  return [alphabetMap, alphabetArray];
})(26);


const VigCipher = (
  { setEncodedText, setDecodedText, encodedText, decodedText, lastSelected }:
    {
      setEncodedText: Dispatch<SetStateAction<string>>,
      setDecodedText: Dispatch<SetStateAction<string>>,
      encodedText: string,
      decodedText: string,
      lastSelected: number
    }) => {
  const defltPlainletters = 'abcdefghijklmnopqrstuvwxyz';

  const [key, setKey] = useState(defltPlainletters);

  const calculateOffsets = () => {
    let offsets: number[] = [];
    for (let i = 0; i < key.length; i++) {
      if (key[i].toLowerCase() in alphabetToNum) {
        offsets.push(alphabetToNum[key[i].toLowerCase()]);
      }
    }
    console.log("offsets: " + offsets)
    return offsets;
  }

  const handleSetKey = (e: ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  }

  const vigCipher = (msg: string, mode: number) => {
    const offsets = calculateOffsets();
    let result = []

    // Encode plain text
    for (let i = 0, j = 0; i < msg.length; i++) {
      if (!(msg[i].toLowerCase() in alphabetToNum)) {
        result[i] = msg[i];

      } else {
        // Add offset to character identifier
        let alphabetIndex = alphabetToNum[msg[i].toLowerCase()] 
        if (mode === 0) {
          alphabetIndex += offsets[j % offsets.length] || 0;
        } else {
          alphabetIndex -= offsets[j % offsets.length] || 0;
        }
        
        // Convert new identifier back to a character
        const len = numToAlphabet.length;
        alphabetIndex = ((alphabetIndex % len) + len) % len;
        const newCharacter = numToAlphabet[alphabetIndex];

        // Keep lower/uppercase
        result[i] = msg[i].toUpperCase() === msg[i] ? newCharacter.toUpperCase() : newCharacter;
        j++;
      }

    }
    console.log(result)
    return result.join('');
  }

  useEffect(() => {
    if (lastSelected === 0) {
      setEncodedText(vigCipher(decodedText, lastSelected))
    } else {
      setDecodedText(vigCipher(encodedText, lastSelected))
    }
  })



  return (
    <div>
      <h1>Vigenère Cipher</h1>
      <div>
        <div><label>Key</label></div>
        <div>
          <input
            type='text'
            className={styles.input}
            placeholder={defltPlainletters}
            value={key}
            onChange={handleSetKey}
          />
        </div>
      </div>
    </div>
  )
}
export default VigCipher