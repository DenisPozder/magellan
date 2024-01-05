import Hero from '@/components/Hero/Hero'
import React from 'react'

export const metadata = {
  title: "Jelovnik - Magellan",
  desctiption: "Ovo je deskripcija jelovnika"
}

const jelovnik = () => {
  return (
    <div>
      <Hero paper={'/paper1.png'} title1={"Magellan"} title2={"meni"} desc={"Započnite svoje kulinarsko putovanje širom sveta uz naš raznovrstan meni koji je pažljivo sačinjen od raznovrsnih jela iz celog sveta."} link={"/reservations"} />
    </div>
  )
}

export default jelovnik