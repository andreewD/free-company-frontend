import React from "react"

type IncreaseNumberTo =
  (quote: number, number: number, setNumber: React.Dispatch<React.SetStateAction<number>>) => void

export const increaseNumberTo: IncreaseNumberTo = (quote, number, setNumber) => {
  let time = setInterval(() => {
    setNumber(number + 1)
    console.log(number)
    if (number === quote) {
      clearInterval(time)
    }
  }, 80)
}

