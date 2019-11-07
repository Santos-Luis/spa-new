import React from "react"
import Img from "gatsby-image"

const CountrySection = (props) => {
  const {
    data: {
      capitalName,
      currencySymbol,
      currencyCode,
      callingCode,
      html,
      countryImage,
      flagImage
    }
  } = props;

  return (
    <div className="country__intro">
      <div className="country__intro__image">
        <Img 
          imgStyle={{ objectFit: 'fill' }}
          style={{ height: '100%', width: '100%'}}
          sizes={countryImage.childImageSharp.sizes}
        />
      </div>
      <div className="country__intro__info">
        <div className="country__intro__info__attributes">
          <div className="country__intro__info__attributes__left-block">
            <div className="country__intro__info__attributes__left-block__key">
              <p>Capital city </p>
              <p>Currency </p>
              <p>Calling code </p>
            </div>
            <div className="country__intro__info__attributes__left-block__value">
              <p>{capitalName}</p>
              <p>{currencySymbol} <span>({currencyCode})</span></p>
              <p>{callingCode}</p>
            </div>
          </div>
          <div className="country__intro__info__attributes__right-block">
            <Img
              imgStyle={{ objectFit: 'fill' }}
              style={{ height: '100%', width: '100%'}} 
              sizes={flagImage.childImageSharp.sizes}
            />
          </div>    
        </div>
        <div className="country__intro__info__description">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}

export default CountrySection;
