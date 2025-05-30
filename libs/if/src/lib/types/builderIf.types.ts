import { TIfCore } from './core/index.js';
import { TFunctionCore } from './functions/index.js';

export type TArgs<T = unknown> = T[];

export type TPlugin<Args extends TArgs = []> = (...args: Args) => boolean;
export type TRPlugin = ReturnType<TPlugin>;
export type TConfig = {
  autoAddContext?: boolean;
};
export type TPluginObject = Record<string, TPlugin>;

/**
 * A utilitarian type that extends `T` `Record` from `N` and `A`
 * @typeParam A The object that needs to be expanded
 * @typeParam B The string that will serve as the key for `Record`
 * @typeParam C Value type for `Record`
 * @see Record
 * @group BuilderIfCore
 */
export type TDoubleRecord<A extends object, B extends string, C> = A &
  Record<B, C>;

export type TConfigPlugin<N> = {
  context?: boolean;
  name: N;
};

export type TCorePlugins = TIfCore & TFunctionCore;
