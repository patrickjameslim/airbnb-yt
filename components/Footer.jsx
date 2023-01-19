const sectionStyles = 'space-y-4 text-xs text-gray-800'
const titleStyles = 'font-bold uppercase'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className={sectionStyles}>
        <h5 className={titleStyles}>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className={sectionStyles}>
        <h5 className={titleStyles}>Community</h5>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>Pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Patrick Lim</p>
      </div>
      <div className={sectionStyles}>
        <h5 className={titleStyles}>Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hello</p>
        <p>Easter Eggs</p>
        <p>Join Now</p>
      </div>
      <div className={sectionStyles}>
        <h5 className={titleStyles}>Host</h5>
        <p>Patrick Lim</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Hours</p>
        <p>Learning Now</p>
      </div>
    </div>
  )
}

export default Footer
