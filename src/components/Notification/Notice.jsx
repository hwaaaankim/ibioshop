import React from 'react'

export default function Notify() {
  const [setShowNotification] = React.useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 jGrowl-notification">
        <h2 className="text-sm font-bold mb-3">Product added to Cart</h2>
        <div className="flex">
          <img
            src="/image/demo/shop/product/e11.jpg"
            alt=""
            className="w-[50px] h-[50px]"
          ></img>
          <h3 className="text-sm align-top">
            <a href="#">Apple Cinema 30"</a> added to{' '}
            <a href="#">shopping cart</a>!
          </h3>
        </div>
      </div>
    </>
  )
}
