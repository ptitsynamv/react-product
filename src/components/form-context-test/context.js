import { createContext } from 'react';

const dataContext = createContext({
  mail: 'default@mail.com',
  text: 'default-text',
  forceChangeMail: () => {},
});

export default dataContext;
