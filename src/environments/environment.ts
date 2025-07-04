// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const basePath = '';
export const apiBasePath = 'https://localhost:7283/';

export const environment = {
  production: false,
  // iconsPath: `${basePath}assets/icons`,
  // imgPath: `${basePath}assets/images`,
  basePath: '',
  appVersion: 'v1',
  // USERDATA_KEY: 'authf649fc9a5f55',
  // isMockEnabled: true,
  apiUrl: `${apiBasePath}api/frontend`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
