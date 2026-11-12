/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/estudios`; params?: Router.UnknownInputParams; } | { pathname: `/experiencia`; params?: Router.UnknownInputParams; } | { pathname: `/hobbies`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/estudios`; params?: Router.UnknownOutputParams; } | { pathname: `/experiencia`; params?: Router.UnknownOutputParams; } | { pathname: `/hobbies`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/estudios${`?${string}` | `#${string}` | ''}` | `/experiencia${`?${string}` | `#${string}` | ''}` | `/hobbies${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/estudios` | `/experiencia` | `/hobbies` | `/` | `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
