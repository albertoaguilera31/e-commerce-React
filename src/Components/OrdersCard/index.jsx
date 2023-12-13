import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard =props=>{
    const { totalPrice, totalProducts } = props
    
    return(
        <div className='flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                <span className='font-light'>12.12.23</span>
                <span className='font-light'>{totalProducts} articles</span>
                </div>
                <span className='font-medium text-2xl'>${totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard