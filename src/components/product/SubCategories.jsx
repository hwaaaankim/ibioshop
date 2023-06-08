import { Disclosure } from "@headlessui/react"

function SubCategories({ subcategories }) {
  return <div>
    {subcategories ?
      <Disclosure.Panel className="hover:text-[#094bad] cursor-pointer">
        {subcategories.map((sub, index) => (
          <span>{sub} </span>
        ))}
      </Disclosure.Panel>
      : ''}
  </div>
}

export default SubCategories