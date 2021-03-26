import * as React from 'react';
import { Module, AsyncRouteComponentState, Ctx } from './types';
/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
export declare function asyncComponent<Props>({ loader, Placeholder, chunkName, }: {
    loader: () => Promise<Module<React.ComponentType<Props>>>;
    Placeholder?: React.ComponentType<Props>;
    chunkName?: string;
}): {
    new (props: Readonly<Props>): {
        state: {
            Component: (React.ComponentClass<Props, any> & import("./types").AsyncComponent) | (React.FunctionComponent<Props> & import("./types").AsyncComponent) | null;
        };
        componentDidMount(): void;
        updateState: () => void;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "Component">(state: AsyncRouteComponentState | ((prevState: Readonly<AsyncRouteComponentState>, props: Readonly<Props>) => AsyncRouteComponentState | Pick<AsyncRouteComponentState, K> | null) | Pick<AsyncRouteComponentState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<AsyncRouteComponentState>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<AsyncRouteComponentState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
    };
    new (props: Props, context?: any): {
        state: {
            Component: (React.ComponentClass<Props, any> & import("./types").AsyncComponent) | (React.FunctionComponent<Props> & import("./types").AsyncComponent) | null;
        };
        componentDidMount(): void;
        updateState: () => void;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "Component">(state: AsyncRouteComponentState | ((prevState: Readonly<AsyncRouteComponentState>, props: Readonly<Props>) => AsyncRouteComponentState | Pick<AsyncRouteComponentState, K> | null) | Pick<AsyncRouteComponentState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<AsyncRouteComponentState>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<AsyncRouteComponentState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
    };
    /**
     * Static so that you can call load against an uninstantiated version of
     * this component. This should only be called one time outside of the
     * normal render path.
     */
    load(): Promise<void>;
    getChunkName(): string | undefined;
    getInitialProps(ctx: Ctx<any>): any;
    contextType?: React.Context<any> | undefined;
};
