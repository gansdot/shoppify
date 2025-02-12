import { Span } from 'next/dist/trace'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-gray-300'>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
                    {/* left colm */}

                    <div className="flex flex-col items-center gap-4 sm:items-start">
                        <div className="flex items-center gap-3">
                            <Image alt='FirewerKs'
                                src="/fireworks.png" width={32} height={32}
                                className="h-8 w-auto" />
                            <span className='text-lg font-semibold text-white'>FirewerKs</span>
                        </div>
                        <p className='text-sm text-gray-400 text-center sm:text-left'>Building the feature of the web</p>
                        <div className="flex-1 w-32 ...">
                            &copy; 2025 FirewerKs. All rights reserved
                        </div>
                    </div>
                    {/* right colm */}
                    <div className='flex flex-col items-center gap-6 sm:items-end'>
                        <div className='flex flex-col items-center gap-8 sm:flex-row sm:gap-12'>
                            <div className='flex flex-col items-center gap-2 sm:items-start'>
                                <h3 className='font-semibold text-bold'>Our Offerings</h3>
                                <div className='flex flex-col items-center gap-2 sm:items-start'>
                                    <a href='#' className='text-sm hover:text-white'>Products</a>
                                    <a href='#' className='text-sm hover:text-white'>Service</a>
                                    <a href='#' className='text-sm hover:text-white'>Pricing</a>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-2 sm:items-start'>
                                <h3 className='font-semibold text-bold'>Company</h3>
                                <div className='flex flex-col items-center gap-2 sm:items-start'>
                                    <a href='#' className='text-sm hover:text-white'>About</a>
                                    <a href='#' className='text-sm hover:text-white'>Blog</a>
                                    <a href='#' className='text-sm hover:text-white'>Careers</a>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-2 sm:items-start'>
                                <h3 className='font-semibold text-bold'>Legal</h3>
                                <div className='flex flex-col items-center gap-2 sm:items-start'>
                                    <a href='#' className='text-sm hover:text-white'>Privacy</a>
                                    <a href='#' className='text-sm hover:text-white'>Terms</a>
                                    <a href='#' className='text-sm hover:text-white'>Contact</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex-1 w-32 ...">

                </div>
            </div>

        </div>
    )
}

export default Footer