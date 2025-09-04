/// <reference types="vite/client" />

declare module 'vite-plugin-dynamic-import' {
  import { Plugin } from 'vite';

  export default function dynamicImport(): Plugin;
}

declare module '*.md' {
  const content: string;
  export default content;
}
