import { showAlert } from './actions';
import { CREATE_POST } from './types';

const spam = ['fuck', 'spam', 'php'];

export function spamWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = spam.filter((word) => {
          if (
            action.payload.title.includes(word) ||
            action.payload.body.includes(word)
          ) {
            return true;
          }
          return;
        });
        if (found.length) {
          return dispatch(showAlert('You are spammer!'));
        }
      }
      return next(action);
    };
  };
}
