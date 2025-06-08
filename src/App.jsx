import Hero_section from './componants/Hero_section'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'> 
      <Hero_section/>
      <section className='min-h-screen bg-blue-500 z-0'/>
    </main>
  )
}

export default App
