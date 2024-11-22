import React from 'react'
import Link from 'next/link';
import stylesR from '../app/styles/rightpage/stylesR.module.css';
import '../app/styles/rotcube/stylesC.css';
import RotCube from "./RotCube";

const RightPage = () => {
  return (
    <div className={stylesR.bg}>
        RightPage
        <div className={stylesR.rotc}>
            {/* <div className={rightpage.cent}>
              
            </div> */}
          <RotCube />

        </div>
    </div>
  )
}

export default RightPage