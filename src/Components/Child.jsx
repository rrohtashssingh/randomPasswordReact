import React,{memo} from 'react'

const Child = ({counterTwo,setCounterTwo}) => {
    console.log("child componenet is rendering again");
  return (
   <h1>Child is here</h1>

  )
}

export default memo(Child)