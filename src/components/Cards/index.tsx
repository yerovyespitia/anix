'use client'
import Card from '@/components/Card'
import { useState, useEffect } from 'react'

const Cards = () => {
  const [numCards, setNumCards] = useState(9)

  useEffect(() => {
    const updateNumCards = () => {
      const screenWidth = window.innerWidth
      const cardWidth = 231 // Ancho de una tarjeta en píxeles
      const extraSpace = 198 // Cantidad adicional de espacio requerido para mostrar una tarjeta más
      let cardsPerPage = Math.floor((screenWidth - extraSpace) / cardWidth) + 1
      cardsPerPage = Math.min(cardsPerPage, 9) // Limitar a un máximo de 9 tarjetas por página
      setNumCards(cardsPerPage)
    }

    window.addEventListener('resize', updateNumCards)

    return () => {
      window.removeEventListener('resize', updateNumCards)
    }
  }, [])

  return (
    <section className={`flex gap-3 overflow-x-hidden`}>
      {[...Array(numCards)].map((_, index) => (
        <Card key={index} />
      ))}
    </section>
  )
}

export default Cards
