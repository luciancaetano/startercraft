import { TRequestResponseError } from '@app/types/api';
import { useMemo } from 'react';

export function useApiError<E extends Error>(error?: E | null) {
  return useMemo(() => {
    if (!error) return null;

    const e = error as unknown as TRequestResponseError;

    if (e?.code === 'ERR_NETWORK') {
      return 'ERR_NETWORK';
    }

    if (e?.code === 'ERR_BAD_REQUEST') {
      if (e?.response?.data?.error?.code) {
        return e?.response?.data?.error?.code ?? null;
      }
    }
    return e?.code ?? null;
  }, [error]);
}
