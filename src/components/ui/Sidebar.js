'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname()
    return ( 
        <div className=" h-screen bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">RestaurantApp</p>

                <p className="mt-3 text-gray-600">Administra tu restaurant en las siguientes opciones:</p>

                <nav className="mt-10">
                    <Link href="/ordenes" passHref legacyBehavior>
                        <a className={`
                        ${pathname === '/ordenes' ? 'block py-2 px-4 rounded bg-gray-300 text-gray-700' : 'block py-2 px-4 rounded  hover:text-white hover:bg-gray-700 text-gray-200'}
                        `}>Ordenes</a>
                    </Link>
                    <Link href="/menu" passHref legacyBehavior>
                        <a className={`
                        ${pathname === '/menu' ? 'block py-2 px-4 rounded bg-gray-300 text-gray-700' : 'block py-2 px-4 rounded  hover:text-white hover:bg-gray-700 text-gray-200'}
                        `}>Menú</a>
                    </Link>
                    
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;