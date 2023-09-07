/// <reference types="node" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'production';
    readonly PUBLIC_URL: string;
    readonly REACT_APP_API_HOST: string;
  }
}

declare module "*.png";
declare module "*.svg";

declare module '*.svg?url' {
  const alignRightsrc: string;
  export default src;
}

declare module '*.svg?svgr' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}