const Card =()=>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Materiales</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://media.istockphoto.com/id/1443824036/es/foto/muchos-pinceles-y-paleta-sobre-mesa-de-madera-plano.jpg?s=2048x2048&w=is&k=20&c=J3Sn2DI3YmrSqb9sMUCThIjzkkF8Zq5q6-K32q-WXVI=' alt=''/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +
                    </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Pinceles</span>
                <span className='text-lg font-medium'>$15.000</span>
            </p>
        </div>

    )
}

export default Card