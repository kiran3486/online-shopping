import PropTypes from "prop-types";
import React from "react";
//import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = ({ setCurrency, dispatch }) => {
  // const changeLanguageTrigger = (e) => {
  //   const languageCode = e.target.value;
  //   dispatch(changeLanguage(languageCode));
  // };

  // const setCurrencyTrigger = (e) => {
  //   const currencyName = e.target.value;
  //   setCurrency(currencyName);
  // };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>Call Us 3965410</span>
      </div>

      {/* <div className="same-language-currency language-style">
        <p>Call Us 3965410</p>
      </div> */}
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
};

export default LanguageCurrencyChanger;
