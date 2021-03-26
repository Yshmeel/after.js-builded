import * as React from 'react';
import { DocumentProps, DocumentgetInitialProps } from './types';
export declare const __AfterContext: React.Context<DocumentProps<import("./types").RenderPageResult>>;
export declare class Document extends React.Component<DocumentProps> {
    static getInitialProps: ({ renderPage }: DocumentgetInitialProps<import("./types").RenderPageResult>) => Promise<{
        html: string;
        helmet: import("react-helmet").HelmetData;
    }>;
    render(): JSX.Element;
}
export declare const useAfterContext: () => DocumentProps<import("./types").RenderPageResult>;
export declare const AfterRoot: React.FC;
export declare const AfterData: React.FC<{
    data?: object;
}>;
export declare const AfterStyles: React.FC;
export declare const AfterScripts: React.FC;
