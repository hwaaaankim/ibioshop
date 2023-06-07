import banner from '../../assets/images/e3.jpg'
import banner1 from '../../assets/images/e3.jpg'
import banner2 from '../../assets/images/e3.jpg'
import banner3 from '../../assets/images/e3.jpg'
import banner4 from '../../assets/images/e3.jpg'

function RelatedProducts() {
  const relatedProducts = [
    {
      banner: banner
    },
    {
      banner: banner1
    },
    {
      banner: banner2
    },
    {
      banner: banner3
    },
    {
      banner: banner4
    }
  ]

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="uppercase text-[16px] font-bold mt-5 mb-2.5">Related Products</span>
        <div className="flex text-[#333] items-center">
          <span className="border border-[#ccc] w-6 h-6 mr-1 hover:bg-blue-600 hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 opacity-50">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="border border-[#ccc] w-6 h-6 hover:bg-blue-600 hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 opacity-50">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex space-x-8">
        {relatedProducts.map((item, index) => (
          <div key="item.id" className="">
            <a title="Banner Image" href="#" className=''>
              <img src={item.banner} alt="Banner Image" className="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts;