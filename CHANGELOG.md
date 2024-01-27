# [1.0.0](https://github.com/lucavb/stylelint-checkstyle-reporter/compare/v0.2.0...v1.0.0) (2024-01-27)


* feat correctly support stylelint 16 ([61994b8](https://github.com/lucavb/stylelint-checkstyle-reporter/commit/61994b8cf497d69460820f133d0530d3fd4b20ee))


### BREAKING CHANGES

* The path for the formatter has been changed
to node_modules/stylelint-checkstyle-reporter/dist/stylelint-checkstyle-reporter.mjs .
The possibility of passing the output through stdin has also been added.
Please refer to the README for further information on the
updated usage.

# Changelog

### 0.2.0

-   Rewriting the project with TypeScript
    -   Adding integration tests with stylelint directly
    -   Using xmbuilder2
    -   Exporting the formatter so the output can be customised easily
-   However, this is backwards compatible

### 0.1.2

-   Update dependencies

### 0.1.1

-   Update lodash from ^3 to ^4

## 0.1.0

-   Initial experimental release.
