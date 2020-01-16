import * as React from 'react'

const translations: any = {
  en: {}
}

interface LanguageContext {
  dispatch?: React.Dispatch<{}>
  lang: string
  translate: (key?: string) => string
}

export const translate = (lang: string) => (key: any) => (translations[lang] && translations[lang][key]) || key

const initial_state: LanguageContext = {
  lang: 'en',
  translate: translate('en')
}

export const I18nContext = React.createContext(initial_state)

export const reducer = (the_state = initial_state, action: any) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        lang: action.payload,
        translate: translate(action.payload),
      }
    default:
      return the_state
  }
}

const I18nContextProvider = (props: object) => {
  const [state, dispatch] = React.useReducer(reducer, initial_state)

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      <div id="i18n" className="root-child-item" {...props} />
    </I18nContext.Provider>
  )
}

export default I18nContextProvider
