import * as React from 'react';
import { Document as DefaultDoc } from './Document';
import { Request, Response } from 'express';
import { Assets, AsyncRouteProps, Chunks } from './types';
export interface AfterRenderOptions<T> {
    req: Request;
    res: Response;
    assets: Assets;
    routes: AsyncRouteProps[];
    document?: typeof DefaultDoc;
    chunks: Chunks;
    scrollToTop?: boolean;
    customRenderer?: (element: React.ReactElement<T>) => {
        html: string;
    } | Promise<{
        html: string;
    }>;
}
export declare function render<T>(options: AfterRenderOptions<T>): Promise<string | undefined>;
