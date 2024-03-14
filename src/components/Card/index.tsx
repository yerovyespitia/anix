const Card = () => {
  return (
    <section className='relative rounded-lg overflow-hidden max-w-[231px] max-h-[332px] min-w-[190px] min-h-[281px]'>
      <section
        className='relative overflow-hidden 
        rounded-lg 
        group 
        cursor-pointer 
        transition-transform 
        duration-300 
        transform 
        hover:scale-[1.03]'
      >
        <img
          className='w-full h-full object-cover'
          src='/imgs/csw.png'
          alt='Chainsaw man'
        />
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300' />
        <article className='hidden group-hover:flex justify-center items-center absolute inset-0 font-medium text-lg text-white'>
          Chainsaw man
        </article>
      </section>
    </section>
  )
}

export default Card
