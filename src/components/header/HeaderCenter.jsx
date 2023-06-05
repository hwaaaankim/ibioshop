import { useState } from 'react'
import { Dropdown } from './HeaderTop'

function Logo() {
  return (
    <div>
      <img src="image/catalog/logo.png" style={{ width: 189, height: 39 }} />
    </div>
  )
}

function CategoriesSelector({ category, setter }) {
  const categories = ['All Categories', 'Apparel', 'Cables and Connectors']
  return (
    <div style={{ padding: '0 15px' }} className="bg-gray-100 rounded-l">
      <select
        value={category}
        onChange={setter}
        style={{ height: 40, fontSize: 12 }}
        className="rounded-l outline-none bg-gray-100"
      >
        {categories.map((item, index) => (
          <option value={item} key={index} style={{ fontSize: 12 }}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

function FilterBar() {
  const [category, setCategory] = useState('All Categories')
  const [search, setSearch] = useState('')
  return (
    <div className="flex-auto flex items-center">
      <CategoriesSelector category={category} setter={setCategory} />
      <div className="flex-auto bg-white p-0.5 rounded-r border-l border-gray-400">
        <div className="flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontSize: 12 }}
            className="flex-auto outline-none px-4 text-gray-500"
            placeholder="Keyword here..."
          />
          <div
            style={{ width: 81, height: 36 }}
            className="flex items-center justify-center bg-black cursor-pointer hover:bg-red-500 rounded-r"
          >
            <i className="fa fa-search text-white" style={{ fontSize: 12 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function CartContent() {
  return (
    <div className="w-[320px]">
      <div>
        <table className="table table-striped">
          <tbody>
            <tr className="bg-[#f9f9f9] text-xs w-full">
              <td
                className="text-center h-[75px] p-[8px]"
                style={{ width: '70px' }}
              >
                <a href="#">
                  <img
                    src="image/catalog/demo/product/80/1.jpg"
                    style={{ width: '70px' }}
                    alt="Yutculpa ullamcon"
                    title="Yutculpa ullamco"
                    className="preview"
                  />
                </a>
              </td>
              <td className="text-left">
                {' '}
                <a className="cart_product_name" href="#">
                  Yutculpa ullamco
                </a>
              </td>
              <td className="text-center">x1</td>
              <td className="text-center">$80.00</td>
              <td className="text-right">
                <a href="#" className="fa fa-edit font-[12px]"></a>
              </td>
              <td className="text-right">
                <a className="fa fa-times fa-delete font-[12px]"></a>
              </td>
            </tr>
            <tr>
              <td className="text-center" style={{ width: '70px' }}>
                <a href="product.html">
                  <img
                    src="image/catalog/demo/product/80/2.jpg"
                    style={{ width: '70px' }}
                    alt="Xancetta bresao"
                    title="Xancetta bresao"
                    className="preview"
                  />
                </a>
              </td>
              <td className="text-left">
                {' '}
                <a className="cart_product_name" href="#">
                  Xancetta bresao
                </a>
              </td>
              <td className="text-center">x1</td>
              <td className="text-center">$60.00</td>
              <td className="text-right">
                <a href="#" className="fa fa-edit"></a>
              </td>
              <td className="text-right">
                <a className="fa fa-times fa-delete"></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="text-left">
                <strong>Sub-Total</strong>
              </td>
              <td className="text-right">$140.00</td>
            </tr>
            <tr>
              <td className="text-left">
                <strong>Eco Tax (-2.00)</strong>
              </td>
              <td className="text-right">$2.00</td>
            </tr>
            <tr>
              <td className="text-left">
                <strong>VAT (20%)</strong>
              </td>
              <td className="text-right">$20.00</td>
            </tr>
            <tr>
              <td className="text-left">
                <strong>Total</strong>
              </td>
              <td className="text-right">$162.00</td>
            </tr>
          </tbody>
        </table>
        <p className="text-right">
          {' '}
          <a className="btn view-cart" href="cart.html">
            <i className="fa fa-shopping-cart"></i>View Cart
          </a>
          &nbsp;&nbsp;&nbsp;{' '}
          <a className="btn btn-mega checkout-cart" href="checkout.html">
            <i className="fa fa-share"></i>Checkout
          </a>
        </p>
      </div>
    </div>
  )
}

function CartMini() {
  const Badge = ({ total }) => (
    <div
      className="absolute -top-2 -right-2 p-1.5 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
      style={{ fontSize: 8 }}
    >
      {total}
    </div>
  )
  const cartContent = CartContent()
  return (
    <Dropdown hasPadding={false} content={cartContent}>
      <div className="flex space-x-4 items-center">
        <div className="relative bg-white w-10 h-10 rounded-full">
          <div className="w-full h-full flex items-center justify-center">
            <i className="fa fa-shopping-bag" style={{ fontSize: 16 }} />
          </div>
          <Badge total={'02'} />
        </div>
        <div className="text-white flex flex-col justify-end">
          <div className="uppercase text-sm font-semibold">my cart</div>
          <div style={{ fontSize: 12 }}>($162.00)</div>
        </div>
      </div>
    </Dropdown>
  )
}

function RightNavs() {
  return (
    <div className="flex space-x-6 pl-12 mx-4 items-center">
      {[{ icon: 'refresh' }, { icon: 'heart' }].map((item, index) => (
        <div
          className="cursor-pointer w-10 h-10 flex items-center justify-center"
          key={index}
        >
          <i
            className={'fa fa-' + item.icon + ' text-white hover:text-black'}
            style={{ fontSize: 24 }}
          />
        </div>
      ))}
      <CartMini />
    </div>
  )
}

export default function HeaderCenter() {
  return (
    <div
      style={{
        paddingTop: 25,
        paddingBottom: 16,
        paddingLeft: 2.5 + '%',
        paddingRight: 2.5 + '%',
      }}
    >
      <div className="flex space-x-7 items-center">
        <Logo />
        <FilterBar />
        <RightNavs />
      </div>
    </div>
  )
}
