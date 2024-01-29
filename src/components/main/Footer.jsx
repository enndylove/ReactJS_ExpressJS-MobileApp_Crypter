import Icons from './Icons/IconsFooter'

const FooterSub = (svg, text) => {
  return (
    <div className="footer__sub">
      <div className="footer__logo">
        {svg}
      </div>
      <p className="footer__info font-body2-bold">
        {text}
      </p>
    </div>
  )
}
const FooterItem = (href, text) => {
  return (
    <li className="footer__item">
      <a href={href} className="footer__link font-caption">
        {text}
      </a>
    </li>
  )
}
const ContentTitle = (title) => {
  return (
    <h6 className="footer__content-title font-button color-darken">
      {title}
    </h6>
  )
}
let getTypeIcon = (typeIcon) => {
  switch (typeIcon.toLowerCase()) {
    case "instagram":
      return Icons.IconInstagram;
    case "twitter":
      return Icons.IconTwitter;
    case "facebook":
      return Icons.IconFacebook;

    default:
      return Icons.IconEmpty
  }
}
const FooterIcons = (typeIcon) => {
  let icon = getTypeIcon(typeIcon)
  return (
    <li className="footer__item">
      <a href="#" className="footer__link font-caption">
        {icon}
      </a>
    </li>
  )
}
const Licence = (licence) => {
  return (
    <p className="footer__licence font-caption">
      {licence}
    </p>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__block">

        {FooterSub(Icons.IconLogo, "Empower your creativity")}

        <div className="footer__sup d-flex justify-content-between">

          <div className="footer__content">

            {ContentTitle("CRYPTER.")}

            <ul className="footer__ul">

              {FooterItem("#", "Explorer")}
              {FooterItem("#", "Connect wallet")}
              {FooterItem("#", "Upload")}
              {FooterItem("#", "How it work")}

            </ul>

          </div>

          <div className="footer__content">

            {ContentTitle("INFO")}

            <ul className="footer__ul">

              {FooterItem("#", "Download")}
              {FooterItem("#", "Help center")}
              {FooterItem("#", "Blog")}
              {FooterItem("#", "Jobs")}

            </ul>
          </div>
          <div className="footer__content" style={{ marginTop: `9%` }}>
            <ul className="footer__ul">

              {FooterIcons("instagram")}
              {FooterIcons("twitter")}
              {FooterIcons("facebook")}
              {FooterIcons("")}

            </ul>

          </div>

        </div>
      </div>

      {Licence("Copyright © 2022 UI8 LLC. All rights reserved")}

    </footer>
  );
};

export default Footer;
