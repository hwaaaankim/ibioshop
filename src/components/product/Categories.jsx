import { Disclosure } from '@headlessui/react'
import SubCategories from './SubCategories'


function Categories() {

  const categories = [
    {
      name: 'Smartphone & Tablets',
      sub: ["Mens's Watches", "Women's Watches", "Kid's Watches", "Accessories"]
    },
    {
      name: 'Electronics',
      sub: ["Cycling", "Running", "Swimming", "Football"]
    },
    {
      name: 'Shoes',
      sub: ["Mens's Watches", "Women's Watches", "Kid's Watches", "Accessories"]
    },
    {
      name: 'Watches',
      sub: ["Mens's Watches", "Women's Watches", "Kid's Watches", "Accessories"]
    },
    {
      name: 'Jewellery',
      sub: ["Mens's Watches", "Women's Watches", "Kid's Watches", "Accessories"]
    },
    { name: 'Health & Beauty' },
    { name: 'Kids & Babies' },
    { name: 'Sports' },
    { name: 'Home & Garden' },
    { name: 'Wines & Spirits' },
  ]

  return (
    <div className="border border-[#d7d7d7] overflow-hidden mb-10 rounded-[3px]">
      <h3 className="border-b border-[#d7d7d7] text-[16px] text-[#222] font-extrabold uppercase bg-[#f5f5f5] p-[15px]">Categories</h3>
      <div className="py-[15px] px-5">
        <div className="box-border">
          <Disclosure>
            {({ open }) => (
              <div>
                {categories.map((item, index) => (
                  <div key={index} className='border-b border-dotted border-[#e4e4e4]'>
                    <Disclosure.Button className="flex items-center justify-between w-full m-0 relative">
                      <span className='text-[#333] font-normal capitalize hover:text-[#094bad] text-[12px]'>{item.name}</span>
                      <span className="button-view fa fa-plus-square-o absolute right-0 top-1 cursor-pointer z-10 text-center w-7 h-7 leading-7"></span>
                    </Disclosure.Button>
                    <div className='ml-8 space-y-2.5 text-[#333] text-[12px] my-2'>
                      <SubCategories subcategories={item.sub}/>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div >
  )
}
export default Categories; 