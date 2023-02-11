import React from 'react'
import {TfiTwitterAlt} from "react-icons/tfi"
import {FaGithub} from "react-icons/fa"
import {RiWhatsappFill} from "react-icons/ri"
import Navbar from './Navbar'
import "../Styles.css/main.css"

export const Contact = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Navbar />    
         <div style={{width:"100%",paddingTop:"3em", height:"100vh", backgroundColor:"#10162F", display:"flex",  flexDirection:"column", alignItems:"center", justifyContent:"center"}} >
              <h3 style={{color:"white", textAlign:"center", marginBottom:"0.5em", 
              padding: "2em"}}>Need a Frontend developer? Contact me via my socials</h3>
              
              <div className="icons-containers" >
                    <a className="links" href="https://twitter.com/Ibeneme_Ikenna"> 
                        <TfiTwitterAlt className="icons"/>
                    </a>
                    <a className="links" href="https://github.com/Ibeneme"> 
                        <FaGithub  className="icons"/>
                    </a>
                    
                    <a className="links" href="https://wa.link/70sz29"> 
                            <RiWhatsappFill className="icons" />
                    </a>
                    
                </div>
                <p style={{color:"white", marginTop:"2em"}}>Built with 🤍 By Ibeneme Ikenna Kenneth </p> 
        </div>
    </div>
  )
}
