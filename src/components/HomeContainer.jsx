import React from 'react'
import game from '../components/img/juego.png'
import bg_righ from '../components/img/Imagen1.jpg'
import { gamesData } from './utils/data'
import './style/style.css'



const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start md:items-strat justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-green-600 font-semibold'>
                        Zona Gaming
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={game} alt="gamepc" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-neutral-700	'>
                    ¿Juegos con descuentos? {" "}
                    <span className=' text-green-600 text-[3rem] lg:text-[5rem]'>Todos aquí</span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Hic incidunt, iste nihil molestiae, qui, quis quam neque
                    placeat nobis modi illo soluta ipsam in! Consectetur
                    molestias voluptate ipsam quam similique?
                </p>

                <button
                    type='button'
                    className=' bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shawdow-lg transition-all ease-in-out duration-100 text-white'
                > Visitar </button>
            </div>
            <div className='py-2 flex-1 flex items-center relative '>
                <img src={bg_righ} alt="background" className=' ml-auto h-470 w-full lg:w-auto lg:h-650 rounded-xl' />
                <div className='w-full h-full absolute top-7 left-0 flex items-center justify-center xl:px-32 xl:py-4  gap-2 flex-wrap change-media '>
                  
                    {gamesData && gamesData.map(n => (

                        <div key={n.id} className='lg:w-[190px]  p-4  backdrop-blur-md rounded-3xl bg-cardOverlay flex flex-col items-center justify-center drop-shadow-lg'>
                            <img src={n.img} alt="f4" className='w-20 lg:w-40 lg:-mt-20 -mt-10' />

                            <p className='text-base lg:text-xl mt-2 font-semibold text-neutral-700 lg:mt-3'>
                                {n.name}
                            </p>

                            <p className='text-[12px] lg:text-sm text-gray-900 font-semibold my-3'>
                                {n.decp}
                            </p>              

                        </div>))}
                </div>
            </div>
        </section>
    )
}

export default HomeContainer