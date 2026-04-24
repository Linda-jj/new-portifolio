'use client'
import Navbar from "./componet/Navbar"
import Header from "./componet/Header"
import About from "./componet/About"
import Services from "./componet/Services"
import Work from "./componet/Work"
import Contact from "./componet/Contact"
import Footer from "./componet/Footer"
import { useEffect, useState } from "react"

export default function Home() {


  const [isDarkMode,setIsDarkMode]=useState(false)
  useEffect(()=>{
if(localStorage.theme=== "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
){
setIsDarkMode(true)
}else{
setIsDarkMode(false)
}
  },[])

  useEffect(()=>{
if(isDarkMode){
  document.documentElement.classList.add("dark")
  localStorage.theme= "dark";
}else{
   document.documentElement.classList.remove('dark')
  localStorage.removeItem("theme");
  }
  },[isDarkMode])
    return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <About isDarkMode={isDarkMode}  />
    <Services  />
    <Work isDarkMode={isDarkMode}  />
    <Contact />
    <Footer isDarkMode={isDarkMode}  />
    </>
   
  );
}
