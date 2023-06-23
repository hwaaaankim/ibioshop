import image from '../../assets/images/10.jpg'
import { useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function ShoppingCartTable({ cartItems }) {

  const [quantity, setQuantity] = useState({index: 0, quantity: 1})
  const handleRemove = () => {

  }
  const handleUpdate = () => {

  }

  return <div>
    <table className="mb-3 w-full text-xs sm:text-sm max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border">
      <thead className="px-2 py-2 bg-gray-100 border-b-transparent h-10">
        <tr className="font-bold ">
          <td className="text-center border border-solid">Image</td>
          <td className="text-left border border-solid pl-2">Product Name</td>
          <td className="text-left border border-solid pl-2">Model</td>
          <td className="text-left border border-solid pl-2">Quantity</td>
          <td className="text-right border border-solid">Unit Price</td>
          <td className="text-right border border-solid pl-4">Total</td>
        </tr>
      </thead>
      <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
                    <td className="border border-solid align-top leading-snug p-2 text-center box-border border-collapse border-spacing-0">
                    <a href="product.html">
                      <img
                        width="60px"
                        src={item.image}
                        alt="Xitefun Causal Wear Fancy Shoes"
                        title="Xitefun Causal Wear Fancy Shoes"
                        className="transition-all rounded p-1 border-solid border-gray-400
                        max-w-full inline-block align-middle h-auto text-center border-separate border-spacing-0"
                      />
                    </a>
                  </td>
                  <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    <a href="product.html">{item.name}</a>
                  </td>
                  <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    <a className='p-2' href="product.html">{item.model}</a>
                  </td>
                  <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    <div className="border-separate table relative min-w-full">
                      <input
                        type="text"
                        className="table w-full px-3 h-9 transition duration-150 ease-in-out border-2 rounded-l-sm shadow-sm
                         focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue
                       focus:border-blue-300 sm:text-sm sm:leading-5"
                        id="input-voucher"
                        placeholder="Enter your gift voucher code here"
                        name="quantity"
                        value={item.quantity}
                        size="1"
                        onChange={(e)=>setQuantity(index, e.target.value)}
                      />
                      <span
                        className="whitespace-nowrap align-middle table-cell"
                        style={{ width: 1 + '%' }}
                      >
                        <Tippy content={<span> Update</span>}>
                        <button
                          type="submit"
                          className="cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                          leading-normal font-normal text-sm inline-block px-4 h-9"
                          onClick={handleUpdate}
                          >
                          <i className="fa fa-refresh"></i>
        
                        </button>
                        </Tippy>
                        <Tippy content={<span>Remove</span>}>
                        <button
                          type="button"
                          data-toggle="tooltip"
                          title=""
                          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white align-middle text-center 
                          leading-normal font-normal text-sm inline-block  px-4 h-9"
                          onClick={() => cartItems = cartItems.filter( cart => cart.index == index) }
                        >
                          <i className="fa fa-times-circle"></i>
                        </button>
                        </Tippy>
                      </span>
                    </div>
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $114.35
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $114.35
                  </td>
                  </tr>
          ))}
      </tbody>
    </table>
  </div>

}

export default ShoppingCartTable