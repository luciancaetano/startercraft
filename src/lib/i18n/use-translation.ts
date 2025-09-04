/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslationNamespaceContext } from './translation-namespace-context';
import { KeyPrefix } from 'i18next';
import {
  FallbackNs,
  UseTranslationOptions,
  UseTranslationResponse,
  useTranslation as useTranslationFromLib,
} from 'react-i18next';

/**
 * Custom hook for translating text using i18next.
 *
 * @template KPrefix - The key prefix type.
 * @param {UseTranslationOptions<KPrefix>} [options] - The translation options.
 * @returns {UseTranslationResponse<FallbackNs<any>, KPrefix>} - The translation response.
 */
export function useTranslation<KPrefix extends KeyPrefix<FallbackNs<any>> = undefined>(
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<any>, KPrefix> {
  const { id } = useTranslationNamespaceContext();
  return useTranslationFromLib(id, options);
}
