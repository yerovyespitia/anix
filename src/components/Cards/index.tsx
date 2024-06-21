import Card from '@/components/Card'

const Cards = () => {
  return (
    <section className={`flex gap-3 overflow-x-hidden`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} />
      ))}
    </section>
  )
}

export default Cards
