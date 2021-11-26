import { useState } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import style from './style.module.css'

const LanguageSelector = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div className={style.languageSelector}>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">{t('english')}</option>
        <option value="fr">{t('french')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
