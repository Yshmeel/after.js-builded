import { GetAssetsParams } from './types';
export declare const errorMeesage = "all async routes must have a chunkName property with value of /* webpackChunkName: \"MyChunkName\" */ check your routes config or use babel-plugin-after";
export declare function getAssets({ route, chunks }: GetAssetsParams): {
    scripts: string[];
    styles: string[];
};
