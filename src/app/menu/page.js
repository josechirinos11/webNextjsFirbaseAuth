import React from 'react'
import Link from 'next/link';

const menu = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>

      <Link href="/nuevoPlatillo" passHref legacyBehavior>
        <a className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">Agregar Platillo</a>
      </Link>



    </>
  )
}

export default menu
