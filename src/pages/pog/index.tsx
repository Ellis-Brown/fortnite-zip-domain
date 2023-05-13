import React from 'react';
import { useEffect } from "react"

export default function AlertRepeatForever() {
  // on page open, alert ("Bing Bong")
  // please write the code

  const alertRepeatForever = () => {
    alert("Get Bing Bonged");
    alertRepeatForever();
  }
  useEffect(() => {
    alertRepeatForever()
  }, [])
  return (
    <div>
      Pog.
    </div>
  )
}