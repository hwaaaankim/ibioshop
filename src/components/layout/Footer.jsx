function Logo() {
  return (
    <div>
      <img
        src="image/catalog/logo-footer.png"
        style={{ width: 203, height: 41 }}
      />
    </div>
  )
}

function MiddleFooterTitles() {
  return (
    <div className="grid grid-cols-6 gap-6">
      <Logo />
      {[
        'information',
        'my account',
        'categories',
        'services',
        'categories',
      ].map((title, index) => (
        <div key={index}>
          <div className="uppercase font-semibold">{title}</div>
          <div className="bg-primary w-[70px] h-[2px]"></div>
        </div>
      ))}
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="flex space-x-3">
      <img src="image/icon/icon-contact.png" />
      <div className="flex-auto space-y-6 text-gray-700">
        <div className="text-[11px]">
          San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SPL, Mexico
        </div>
        <div className="text-[11px]">
          (+0214)0 315 215 - (+0214)0 <br />
          315 215
        </div>
        <div className="text-[11px] cursor-pointer">
          Contact@Opencartworks.Com
        </div>
        <div className="text-[11px]">Open Time: 8:00AM - 6:00PM</div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="relative">
      <div className="bg-[#f5f5f5] mt-[50px] pb-[50px]">
        <div className="grid grid-cols-6 gap-6 pt-[55px] px-[30px]">
          <div className="col-span-6">
            <MiddleFooterTitles />
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
