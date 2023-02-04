import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'
const list = [
  {number:1,title:"lets Complete this",date:new Date("02/01/23")},
  {number:2,title:"should sleep at 10",date:new Date("08/20/23")},
  {number:3,title:"lets Complete react",date:new Date("02/02/23")},
]
export default function MainSection(props) {
  const [filteredList , setFilteredList] = useState(list)
  const addToList =(obj)=> {
    list.push(obj)
    setFilteredList(list)
  } 
  return (
    <div className='main-section'>
      {props.active === "INBOX" && (<Inbox list={filteredList} append={addToList}/>)}
      {props.active === "TODAY" && <Today list={filteredList}/>}
      {props.active === "NEXT" && <Next7Days list={filteredList}/>}
    </div>
  )
}
