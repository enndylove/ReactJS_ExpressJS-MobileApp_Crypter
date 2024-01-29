import { Animated } from "react-animated-css";
import FormNLetter from "./FormNLetter";
import Icons from "./Icons";

const DownloadMain = (title, info, [hrefFirstButton, textFirstButton, iconFirstButton], [hrefSecondButton, textSecondButton, iconSecondButton]) => {
  return (
    <div className="download default-padding">
      <Animated className="wow" animationIn="fadeInUp" isVisible={true} animationInDuration={1000}>
        <h3 className="download__title download-newsletter__title font-h3 color-darken">
          {title}
        </h3>
      </Animated>
      <div className="download__content download-newsletter__content w-100">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
          <p className="download__info font-body2 color-darken">
            {info}
          </p>
        </Animated>
        <Animated className="wow w-100 download__button-wrapper" animationIn="fadeIn" isVisible={true} animationInDuration={1300}>
          <div className="w-100">
            <a href={hrefFirstButton} className="download__button w-100 font-button">
              {textFirstButton}
              {iconFirstButton}
            </a>
          </div>
        </Animated>
        <Animated className="wow w-100 download__button-wrapper" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
          <div className="w-100">
            <a href={hrefSecondButton} className="download__button w-100 font-button white">
              {textSecondButton}
              {iconSecondButton}
            </a>
          </div>
        </Animated>
      </div>
    </div>
  )
}

const NewsletterMain = (title, info) => {
  return (
    <div className="newsletter default-padding">
      <Animated className="wow" animationIn="fadeInUp" isVisible={true} animationInDuration={1000}>
        <h3 className="download__title download-newsletter__title font-h3 color-white">
          {title}
        </h3>
      </Animated>
      <div className="download__content download-newsletter__content w-100">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
          <p className="download__info font-body2">
            {info}
          </p>
        </Animated>
        <FormNLetter />
      </div>
    </div>
  )
}

const Download = () => {
  return (
    <section className="section download-newsletter">

      {DownloadMain(
        "Download",
        "In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time. ",
        ["#", "apple store", Icons.IconAppleStore],
        ["#", "google play", Icons.IconGooglePlay]
      )}

      {NewsletterMain(
        "Newsletter",
        "Get the latest Crypter updates"
      )}

    </section>
  );
};

export default Download;
