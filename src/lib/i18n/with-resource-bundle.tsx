/* eslint-disable @typescript-eslint/no-explicit-any */
import { TranslationNamespaceContext } from './translation-namespace-context';
import { I18NResource } from './types';
import Loader from '@components/elements/loader';
import useUUID from '@hooks/use-uuid';
import i18n from 'i18next';
import { ComponentType, useEffect, useMemo, useRef, useState } from 'react';

type ExtractProps<T> = T extends ComponentType<infer P> ? P : never;

/**
 * A higher-order component (HOC) that provides internationalization (i18n) capabilities to the wrapped component.
 *
 * @param {React.ComponentType} Component - The React component to be wrapped.
 * @param {Function} resourceBundle - A function that returns a Promise which resolves to the resource bundle needed for the component.
 *
 * @returns {React.ComponentType} A new component that fetches the necessary resource bundle when it mounts and provides the `t` function as a prop to the wrapped component.
 *
 * @example
 * const MyComponent = ({ t }) => <div>{t('hello')}</div>;
 * const resourceBundle = () => Promise.resolve({
 *   en: { hello: 'Hello' },
 *   es: { hello: 'Hola' },
 * });
 * export default withResourceBundle(MyComponent, resourceBundle);
 */
function withResourceBundle<T>(
  WrappedComponent: ComponentType<T>,
  resourceBundle: (() => Promise<{ default: I18NResource }>) | I18NResource,
) {
  const Component = (props: ExtractProps<typeof WrappedComponent>) => {
    const namespace = useUUID();
    const loading = useRef(false);
    const done = useRef(false);
    const [viewLoading, setViewLoading] = useState(true);

    useEffect(() => {
      if (typeof resourceBundle === 'function') {
        if (!loading.current && !done.current) {
          loading.current = true;
          setViewLoading(true);
          resourceBundle()
            .then((bundle) => {
              Object.entries(bundle.default).forEach(([language, bundle]) => {
                i18n.addResourceBundle(language, namespace, bundle, true, true);
              });

              loading.current = false;
              setViewLoading(false);
              done.current = true;
            })
            .catch((error) => {
              console.error(error);
              loading.current = false;
              setViewLoading(false);
              done.current = true;
            });
        }
      } else {
        Object.entries(resourceBundle).forEach(([language, bundle]) => {
          i18n.addResourceBundle(language, namespace, bundle, true, true);
        });
      }
    }, [namespace]);

    const trueLoaded = useMemo(
      () => !viewLoading && !loading.current && done.current,
      [viewLoading],
    );

    return (
      <TranslationNamespaceContext.Provider value={{ id: namespace }}>
        {trueLoaded && <WrappedComponent {...(props as any)} />}
        {!trueLoaded && <Loader />}
      </TranslationNamespaceContext.Provider>
    );
  };

  Component.displayName = `withResourceBundle(${WrappedComponent.displayName || WrappedComponent.name})`;

  return Component;
}

export default withResourceBundle;
