/// <reference types="vite/client" />

declare module "*&imagetools" {
  const src: {
    src: string;
    srcset: string;
    images?: {
      [width: number]: string;
    };
    width?: number;
    height?: number;
  };
  export default src;
}