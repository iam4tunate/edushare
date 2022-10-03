import { v4 as uuid } from 'uuid'
import Logo from '../assets/logo.svg'
import { HiMenu } from 'react-icons/hi'
import { navlinks } from '../data'
import Button from './Button'

const Nav = () => {
    return (
        <nav className='flex items-center justify-between py-5'><img src={Logo} className="w-24 sm:w-28 md:w-32 lg:w-36" alt="" />
            <ul className='hidden items-center md:flex gap-9'>
                {navlinks.map(link =>
                    (<li key={uuid()} className='text-black'>{link.title}</li>))}</ul>
            <HiMenu className='w-7 h-7 md:hidden' />
            <Button text='Sign in' bg='bg-lightBlue' textColor='text-blue' classes='hidden md:block' />
        </nav>
    )
}
export default Nav