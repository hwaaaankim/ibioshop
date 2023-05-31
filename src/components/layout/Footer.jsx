function SocialMedia() {
  return (
    <div className="flex space-x-10 items-center text-white bg-primary py-[30px] px-[15px] rounded">
      <div className="flex-auto flex space-x-6 items-center">
        <div className="uppercase font-semibold">follow socials</div>

        <div className="flex space-x-3 items-center">
          {[
            'facebook',
            'twitter',
            'google-plus',
            'pinterest',
            'youtube-play',
            'linkedin',
            'skype',
          ].map((brand, key) => (
            <div
              key={key}
              className="w-[42px] h-[42px] flex items-center justify-center cursor-pointer bg-[#00000033] hover:bg-white hover:text-primary rounded-sm"
            >
              <icon className={'text-[12px] fa fa-' + brand} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-6 items-center">
        <div className="uppercase font-semibold">signup for newsletter</div>
        <div className="flex-auto flex items-stretch">
          <input
            className="flex-auto py-3 px-4 text-xs bg-white text-gray-700 rounded-l outline-none"
            placeholder="Your email address..."
          />
          <div className="uppercase bg-[#222] text-white text-sm font-semibold px-4 flex items-center rounded-r">
            subscribe
          </div>
        </div>
      </div>
    </div>
  )
}

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

function SpecialLink({ title }) {
  return (
    <div className="flex space-x-2 items-center cursor-pointer text-gray-700 hover:text-primary">
      <i className="fa fa-dot-circle-o" style={{ fontSize: 8 }} />
      <div className="text-xs">{title}</div>
    </div>
  )
}

function InformationNavs() {
  const titles = [
    'About Us',
    'FAQ',
    'Warranty And Services',
    'Support 24/7 page',
    'Product Registration',
    'Product Support',
  ]
  return (
    <div className="space-y-5">
      {titles.map((title, index) => (
        <SpecialLink key={index} title={title} />
      ))}
    </div>
  )
}
function AccountNavs() {
  const titles = [
    'Brands',
    'Gift Certificates',
    'Affiliates',
    'Specials',
    'FAQs',
    'Custom Link',
  ]
  return (
    <div className="space-y-5">
      {titles.map((title, index) => (
        <SpecialLink key={index} title={title} />
      ))}
    </div>
  )
}
function CategoryNavs() {
  const titles = [
    'Event & Party Supplies',
    'Home Improvement',
    'Lamps & Light Fixtures',
    'Kitchen & Bath Fixtures',
    'Customer Service',
    'Kitchen & Dining',
  ]
  return (
    <div className="space-y-5">
      {titles.map((title, index) => (
        <SpecialLink key={index} title={title} />
      ))}
    </div>
  )
}
function ServiceNavs() {
  const titles = [
    'Contact Us',
    'Returns',
    'Support',
    'Site Map',
    'Customer Service',
    'Custom Link',
  ]
  return (
    <div className="space-y-5">
      {titles.map((title, index) => (
        <SpecialLink key={index} title={title} />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <div>
      <div className="bg-[#f5f5f5] mt-[50px] pb-[50px]">
        <div className="mt-[-50px] mb-[-15px] px-5">
          <SocialMedia />
        </div>

        <div className="grid grid-cols-6 gap-6 pt-[55px] px-[30px]">
          <div className="col-span-6">
            <MiddleFooterTitles />
          </div>

          <ContactInfo />
          <InformationNavs />
          <AccountNavs />
          <CategoryNavs />
          <ServiceNavs />
          <CategoryNavs />
        </div>
      </div>
    </div>
  )
}
