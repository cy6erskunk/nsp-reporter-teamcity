### This package is deprecated since NSP was shut down in September 2018 (see [blogpost](https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting) for the details).Use [npm-audit-reporter-teamcity](https://github.com/cy6erskunk/npm-audit-reporter-teamcity) instead.

---

## nsp reporter for TeamCity
[![Build Status](https://travis-ci.org/cy6erskunk/nsp-reporter-teamcity.svg?branch=master)](https://travis-ci.org/cy6erskunk/nsp-reporter-teamcity)
[![NPM version](https://img.shields.io/npm/v/nsp-reporter-teamcity.svg)](https://www.npmjs.com/package/nsp-reporter-teamcity)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Generates TeamCity inspections from [nsp][nsp] report
![Demo report](tc-ui.png)

### Installation
1. Install packages
```
npm i -D nsp nsp-reporter-teamcity
```
or, in case of `yarn`
```
npm i -D nsp nsp-reporter-teamcity nsp-preprocessor-yarn
```
2. Add npm scripts to run checks locally and in a CI server, e.g.:
```
"nsp": "nsp check --preprocessor yarn",
"nsp:ci": "nsp check --reporter teamcity --preprocessor yarn"
```
(just drop `--preprocessor yarn` in case of `npm`)

3. Configure build step in TeamCity
e.g. Command Line runner with script to install dependencies and run checks:
```
yarn
yarn nsp:ci
```

### Configuration
Put `nsp.conf.json` config file in a project root directory to override any of the dafault values:

```json
{
  "nspInspectionTypeId": "nsp-security-inspection",
  "nspInspectionName": "NSP security inspection",
  "nspInspectionCategory": "security",
  "npsInspectionSeverity": "WARNING"
}
```

[nsp]: https://www.npmjs.com/package/nsp
