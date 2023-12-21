import React,{ReactNode} from 'react';

interface Props{
       handleClick():void,
       type:React.ReactNode|string,
       className:string
}

const Action=({handleClick,type,className}:Props)=> {
  return (
    <div className={className} onClick={handleClick}>{type} </div>
  )
}

export default Action
