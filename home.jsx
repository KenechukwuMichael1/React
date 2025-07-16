import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'
import { Button } from '../components/button'

function Home(){

  const buttons = ["login", "logout", "forgot password"]
  const MyButton = () => {
    return buttons.map((btn) => {
      return <button>{btn}</button>
    })
  }
  
  const students = [
    {
      name: "Michael",
      gender: "male",
      comp: "dark-skinned",
    },
    {
      name: "Ken",
      gender: "male",
      comp: "fair-skinned",
    },
    {
      name: "Immadara",
      gender: "female",
      comp: "fair-skinned",
    },
    {
      name: "Isaac",
      gender: "male",
      comp: "dark-skinned",
    },
  ]
   
  return <>
    {/* <Button buttonTitle = 'Subscribe' active = {true} />
        <Button buttonTitle = 'Log In' />
        <Button buttonTitle = 'Sign Up' />
        <p>This is our first react lesson</p> */}
  
    {/* <div style={{
        border: 1,
        borderColor: "red",
        height: 150,
        width: 100
      }}>
        <p>Do you want to logout?</p> <br /><br />
  
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          {1 > 3 ?  
  
            <Button buttonTitle="No" active={false} />
            :
            <Button buttonTitle="Yes, logout" active={true} />
            
          }
  
        </div>
      </div> */}
  
  
    {/* {
            buttons.map((btn) => {
              return <button>{btn}</button>
            })
          } */}
    {
      students.map((student, index) => {
        return <div style={{
          border: 6,
          borderColor: "black",
          borderStyle: 1,
          padding: 20
        }}>
          <p> Name: {student.name}</p>
          <p> Gender: {student.gender}</p>
          <p> Comp: {student.comp}</p>
        </div>
      })
    }
  
  
  </>
  
  
  
}
export default Home