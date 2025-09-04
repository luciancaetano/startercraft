import { TranslationNamespaceContextType } from './types';
import { createContext, useContext } from 'react';

export const TranslationNamespaceContext = createContext<TranslationNamespaceContextType>({
  id: '',
});

export function useTranslationNamespaceContext(): TranslationNamespaceContextType {
  return useContext(TranslationNamespaceContext);
}
