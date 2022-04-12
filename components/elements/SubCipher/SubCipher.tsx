import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from './SubCipher.module.scss';


const SubCipher = (
  { setEncodedText, setDecodedText, encodedText, decodedText, lastSelected }:
    {
      setEncodedText: Dispatch<SetStateAction<string>>,
      setDecodedText: Dispatch<SetStateAction<string>>,
      encodedText: string,
      decodedText: string,
      lastSelected: number
    }) => {
  const defltPlainletters = 'abcdefghijklmnopqrstuvwxyz';
  const defltSubLetters = 'zyxwvutsrqponmlkjihgfedcba';

  const [plainLetters, setPlainLetters] = useState(defltPlainletters);
  const [subLetters, setSubLetters] = useState(defltSubLetters);


  interface subMap {
    [character: string]: string;
  }

  // constructs a mapping data structure
  const [plainToSub, subToPlain] = ((plain: string, sub: string) => {
    let plainToSub: subMap = {};
    let subToPlain: subMap = {};

    for (let i = 0; i < plain.length; i++) {
      plainToSub[plain[i]] = sub[i];
      subToPlain[plain[i]] = sub[i]
    }
    return [plainToSub, subToPlain];
  })(plainLetters, subLetters);


  const subCipher = (msg: string, map: subMap) => {

    let result = [];
    for (let i = 0; i < msg.length; i++) {
      if ((msg[i].toLowerCase() in map)) {
        if (msg[i] == msg[i].toUpperCase()) {
          result[i] = map[msg[i].toLowerCase()].toUpperCase();
        } else {
          result[i] = map[msg[i]]
        }
      } else {
        result[i] = msg[i];
      }
    }
    return result.join('');
  };

  const randomise = () => {
    const alphabetArray = defltPlainletters.split('');
    const limit = Math.floor(Math.random() * 50) + 20;
    for (let i = 0; i < limit; i++) {
      const temp = alphabetArray[i]
      const randomi = Math.floor(Math.random() * 26)
      alphabetArray[i] = alphabetArray[randomi];
      alphabetArray[randomi] = temp;
    }
    return alphabetArray.join('');
  }


  if (lastSelected == 0) {
    setEncodedText(subCipher(decodedText, plainToSub));
  } else {
    setDecodedText(subCipher(encodedText, subToPlain));
  }

  return (
    <div>
      <h1>Substitution Cipher</h1>
      <div>
        <div><label>Plain letters</label></div>
        <div>
          <input
            type='text'
            placeholder={defltPlainletters}
            className={styles.input}
            value={plainLetters}
            onChange={(e)=> setPlainLetters(e.target.value)}
          />
        </div>

        <div className={styles.secondInput}>
          <label>Corresponding substitution letters</label>
        </div>
        <div>
          <input
            type='text'
            placeholder={defltSubLetters}
            className={styles.input}
            value={subLetters}
            onChange={(e)=> setSubLetters(e.target.value)}
          />
          <button onClick={() => setSubLetters(randomise())}>Randomise substitution</button>
        </div>
      </div>
    </div>
  )
}
export default SubCipher