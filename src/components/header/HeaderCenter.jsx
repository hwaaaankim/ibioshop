import { useState } from 'react'

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
  const [search, setSearch] = useState('h')
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
            className="flex-auto outline-none px-3 text-gray-500"
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

function CartMini() {
  const Badge = ({ total }) => (
    <div
      className="absolute -top-2 -right-2 p-1.5 bg-black text-white rounded-full"
      style={{ fontSize: 8 }}
    >
      {total}
    </div>
  )
  return (
    <div className="flex space-x-6 items-center">
      <div className="relative bg-white p-2 px-3 rounded-full">
        <i className="fa fa-shopping-bag" style={{ fontSize: 16 }} />
        <Badge total={'02'} />
      </div>
      <div className="text-white">
        <div className="uppercase text-sm">my cart</div>
        <div style={{ fontSize: 12 }}>($162.00)</div>
      </div>
    </div>
  )
}

function RightNavs() {
  return (
    <div className="flex space-x-8 items-center">
      {[{ icon: 'refresh' }, { icon: 'heart' }].map((item, index) => (
        <div className="cursor-pointer" key={index}>
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
      className="bg-primary"
      style={{
        paddingTop: 25,
        paddingBottom: 16,
        paddingLeft: 2.5 + '%',
        paddingRight: 2.5 + '%',
      }}
    >
      <div className="flex space-x-10 items-center">
        <Logo />
        <FilterBar />
        <RightNavs />
      </div>
    </div>
  )
}
