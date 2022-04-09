import CaesarCipher from "../components/elements/CaesarCipher/CaesarCipher"
import MainTitle from "../components/elements/MainTitle/MainTitle"

const cipher = () => {
  return (
    <div>
      <MainTitle>Caesar Cipher</MainTitle>
      <CaesarCipher />
    </div>
  )
}
export default cipher