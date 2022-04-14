import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

const CaesarCipher = (
  { setEncodedText, setDecodedText, encodedText, decodedText, lastSelected }:
    {
      setEncodedText: Dispatch<SetStateAction<string>>,
      setDecodedText: Dispatch<SetStateAction<string>>,
      encodedText: string,
      decodedText: string,
      lastSelected: number
  }) => {
  
  const [offsetShift, setOffsetShift] = useState(0);
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

  const caesarEncode = (msg: string, offset: number) => {

    let result = [];
    for (let i = 0; i < msg.length; i++) {

      if (!(msg[i].toLowerCase() in alphabetToNum)) {
        // not a valid character to encode
        result[i] = msg[i];

      } else {
        let alphabetIndex = alphabetToNum[msg[i].toLowerCase()] + offset;
        // The following is done to take module of negative numbers correctly
        // module does not work for negative numbers in Javascript
        const len = numToAlphabet.length;
        alphabetIndex = ((alphabetIndex % len) + len) % len;
        let upFix = msg[i] < 'a' ? 'a'.charCodeAt(0) - 'A'.charCodeAt(0) : 0;

        result[i] = String.fromCharCode(numToAlphabet[alphabetIndex].charCodeAt(0) - upFix);
      }
    }
    console.log(result)
    return result.join('');
  };

  const handleChangeOffset = (e: ChangeEvent<HTMLInputElement>) => {
    let offset = parseInt(e.target.value);
    setOffsetShift(offset);
    if (lastSelected == 0) {
      const encodedMessage = caesarEncode(decodedText, offset || 0);
      setEncodedText(encodedMessage);
    } else {
      const decodedMessage = caesarEncode(encodedText, - offset || 0);
      setDecodedText(decodedMessage);
    }
  }

  useEffect(() => {
    if (lastSelected == 0) {
      setEncodedText(caesarEncode(decodedText, offsetShift || 0));
    } else {
      setDecodedText(caesarEncode(encodedText, -offsetShift || 0));
    }

  })
  
  

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <div>
        <label>Shift by: </label>
        <input type='number' value={offsetShift} onChange={handleChangeOffset}></input>
      </div>
    </div>
  )
}
export default CaesarCipher