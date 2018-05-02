/**
 * Global Variables
 */
// Read application name and version from package file
declare function require(moduleName: string): any;
export const { version: appVersion, name: appName } = require('../../package.json');
