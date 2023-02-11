import React from "react";
import Navbar from "./Navbar";
import {TfiTwitterAlt} from "react-icons/tfi"
import {FaGithub} from "react-icons/fa"
import {RiWhatsappFill} from "react-icons/ri"
import { Link } from "react-router-dom";

export const Body = () => {
  return (
    <div style={{display:"flex", flexDirection:'column', marginTop:"1em", justifyContent:"center"}} >
        <Navbar />
        <div style={{display:"flex", marginTop:"8em", justifyContent:"center"}}>
    
            <div className="body-container">
            <h4 className="body-text" >I'm Ibeneme Ikenna Kenneth</h4>
            <h1 className="body-text-header" >FRONTEND DEVELOPER</h1>
            <p className="body-text">JavaScript || React Js || React Native</p>
            <div className="div-container">
                <div id="div-container-btn" >
                    <Link to ="/Portfolio"> 
                        <button  className="bttn-container" >
                             View My Portfolio
                        </button>
                    </Link>
                       
               
                   
                  
                        {/* <button  className="bttn-container-two" >
                             View My Resume
                         </button> */}
                 
                    
                </div>
                <div className="icons-container">
                    <a className="link" href="https://twitter.com/Ibeneme_Ikenna"> 
                        <TfiTwitterAlt className="icon"/>
                    </a>
                    <a className="link" href="https://github.com/Ibeneme"> 
                        <FaGithub  className="icon"/>
                    </a>
                    
                    <a className="link" href="https://wa.link/70sz29"> 
                            <RiWhatsappFill className="icon" />
                    </a>
                    
                </div>
            </div>
              
                
           </div>

        </div>
        <div className="body-container-main" >

        </div>
            <div style={{display:"flex", marginTop:"-1em", justifyContent:"center",}}>
            <div style={{alignItems:"center"}}>
            <h2 className="h2" style={{fontWeight:"bolder", marginBottom:"0.9em"}}> MY PORTFOLIO PROJECTS</h2>
            <div className="body-containers">
            <iframe className="iframes"
            src="https://shoppermans-ecommerce-react-store.vercel.app" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <div clasName="last"> 
                <h3 className ="bttbrr" >SHOPPERMANS E-COMMERCE WEB APP</h3>
                <p className ="bttbr" style={{marginTop:"0.7em" , fontWeight:"bolder" }}>React Js || Javascript || CSS || HTML </p>
                <p className ="bttbr" style={{marginTop:"2em" }}>
                    Shoppermans is an e-commerce web app where users can cart and buy wrist watches, 
                    built using React Js and a few React NPM Dependencies such as react-use-cart, react-router-dom, react-icons
                    and a few React Hooks namely; <br /><br/>
                    - useState <br />
                    - useEffect</p>
                    <div style={{marginTop:"1.7em"}} className ="bttb">
                    <a href="https://shoppermans-ecommerce-react-store.vercel.app">
                            <button className="bttn-container">View Site</button>
                        </a>

                        <a href="https://github.com/Ibeneme/Shoppermans-Ecommerce-React-App">
                        <button className="bttn-container-two"> View Github</button>
                        </a>
                    </div>
            </div>
            </div>
            <div style={{marginTop:"3.4em"}} className="body-containers">
            <iframe style={{border:"#0162F 0.09em solid " }}
            src="https://ikenna-ibeneme-chat-gpt-using-javascript.vercel.app" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <div clasName="last"> 
                <h3 className ="bttbrr" >CHAT GPT</h3>
                <p  className ="bttbr" style={{marginTop:"0.7em" , fontWeight:"bolder" }}>React Js || Express Js || OpenAI || API || Javascript || CSS || HTML </p>
               <p className ="bttbr" style={{marginTop:"2.9em" }}>
               It is built on top of OpenAI's API, I built a server using Express.js( a node js framework for serverside JavaScript Language ), Built the Frontend using React Js, by making API Calls from my server to the client side, my server side was deployed on render while my client side i deployed on vercel.app visible for all.</p>
                    <div className ="bttb" style={{marginTop:"1.7em"}}>
                        <a href="https://ikenna-ibeneme-chat-gpt-using-javascript.vercel.app">
                            <button className="bttn-container">View Site</button>
                        </a>
                        <a href="https://github.com/Ibeneme/Chat-GPT-using-Javascript">
                        <button className="bttn-container-two"> View Github</button>
                        </a>
                       
                    </div>
            </div>
            </div>
        </div>
        
        </div>



        {/* //footer */}

        <div style={{width:"100%", marginTop:"3em", backgroundColor:"#10162F", height:"16em",display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}} >
              <p style={{color:"white"}}>Made with 🤍 By Ibeneme Ikenna Kenneth </p> 
              <div className="icons-containers">
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
        </div>


    </div>
  )
}
