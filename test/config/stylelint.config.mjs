/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  quietDeprecationWarnings: true,
};
