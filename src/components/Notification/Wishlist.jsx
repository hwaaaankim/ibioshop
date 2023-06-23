import React from "react";

export default function Notify() {
  const [setShowNotification] = React.useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 jGrowl-notification">
        <h2 className="text-sm font-bold mb-3">Product added to Wishlist</h2>
        <div className="flex">
          <img src="image/demo/shop/product/e11.jpg" alt="" className="w-[50px] h-[50px]"></img>
          <h3 className="text-sm align-top"><a href="#">You must login Apple Cinema 30"</a> added to <a href="#">to your whish list</a>!</h3>
        </div>
      </div>
    </>
  )
}