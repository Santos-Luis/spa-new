import React from "react"

const CountrySection = (props) => {
  const {
    data: {
      name,
      imageUrl,
      capitalName,
      currencySymbol,
      currencyCode,
      callingCode,
      flagPath,
      html
    }
  } = props;

  return (
    <div className="country full-border-bottom">
      <h1 className="country__title">
        <span>Hello </span>
        {name}
      </h1>
      <div className="country__intro">
        <div className="country__intro__image">
          <img src={imageUrl} className="medium-width" />
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
              <img src={flagPath} /> 
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
    </div>
  );
}

export default CountrySection;
