/* eslint-disable no-console */
import { CHANGE_LANGUAGE } from '../../action/locale';
import messagesVn from './vn.json';
import messagesEn from './en.json';

const messages = {
  vi: messagesVn,
  en: messagesEn,
};

const initialState = {
  messages,
  lang: 'en',
};

export default function locales(oldState = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...oldState,
        lang: action.data.lang,
      };
    }
    default:
      return oldState;
  }
}
