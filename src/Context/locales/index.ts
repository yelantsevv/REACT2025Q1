import { useContext } from 'react';
import { Context } from '../Context';
import en from './en.json';
import ru from './ru.json';

export default function useLocal() {
  const context = useContext(Context);
  return { en, ru }[context.local];
}
