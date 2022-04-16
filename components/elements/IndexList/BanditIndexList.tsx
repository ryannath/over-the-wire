import IndexList from "./IndexList"

const numPages = 6;

const BanditIndexList = () => {
  return (
    <IndexList
        path='/bandit/'
        text='bandit'
        range={numPages}
      />
  )
}
export default BanditIndexList