import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import ca from './locales/ca.json'
import ro from './locales/ro.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    ca: { translation: ca },
    ro: { translation: ro },
  },
  lng: localStorage.getItem('lang') || 'es', // español por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

// actualizamos el atributo lang del html cuando cambia el idioma
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng)
})

export default i18n