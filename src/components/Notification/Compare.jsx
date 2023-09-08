import React from 'react'
import { CDN_URL } from '../../config/config'

export default function Notify() {
  const [setShowNotification] = React.useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 jGrowl-notification">
        <h2 className="text-sm font-bold mb-3">Product added to Compare</h2>
        <div className="flex">
          <img
            src={CDN_URL + '/image/demo/shop/product/e11.jpg'}
            alt=""
            className="w-[50px] h-[50px]"
          ></img>
          <h3 className="text-sm align-top">
            <a href="#">Success: You have added login Apple Cinema 30"</a> added
            to <a href="#">your product comparasion!</a>!
          </h3>
        </div>
      </div>
    </>
  )
}
