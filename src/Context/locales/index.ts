import { useContext } from 'react';
import { ThemeContext } from '../Context';
import en from './en.json';
import ru from './ru.json';

export default function useLocal(key: keyof typeof en) {
  const context = useContext(ThemeContext);
  return { en, ru }[context.local][key];
}
