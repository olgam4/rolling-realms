import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationFR from './locales/fr/translation.json'

i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
  })

i18next.addResourceBundle('en', 'translation', translationEN, true)
i18next.addResourceBundle('fr', 'translation', translationFR, true)

export default i18next
