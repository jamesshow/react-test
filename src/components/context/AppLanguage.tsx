//ref: https://medium.com/@whitewoodcc/mocking-react-context-in-consumer-component-fb384234a573
import React from 'react';
import { LanguageContext } from './LanguageContext';
import { LanguageMenu } from './LanguageMenu';

import './AppLanguage.css';

const AppLanguage = () => {
  const [language, setLanguage] = React.useState<string>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <h2>current language: {language}</h2>
      <LanguageMenu />
    </LanguageContext.Provider>
  );
}

export default AppLanguage;