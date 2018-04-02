/* eslint camelcase: 0 */

export const singleVulnerability = {
  meta: {
    statusCode: 200,
    headers: {
      'x-nsp-request-id': '1522254809327:api-ff5689796-68xgb:21:jfatjc82:72265',
      vary: 'origin,accept-encoding',
      'content-type': 'application/json; charset=utf-8',
      'strict-transport-security': 'max-age=15768000',
      'x-frame-options': 'DENY',
      'x-xss-protection': '1; mode=block',
      'x-download-options': 'noopen',
      'x-content-type-options': 'nosniff',
      'cache-control': 'no-cache',
      'content-length': '605',
      date: 'Wed, 28 Mar 2018 16:33:29 GMT',
      via: '1.1 google',
      'alt-svc': 'clear',
      connection: 'close',
    },
  },
  data: [
    {
      id: 532,
      updated_at: '2017-11-29T17:55:56.935Z',
      created_at: '2017-09-21T20:40:00.889Z',
      publish_date: '2017-11-27T17:56:00.056Z',
      overview:
        'Moment is vulnerable to a low severity regular expression denial of service vulnerability.',
      recommendation: 'Update to version 2.19.3',
      cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
      cvss_score: 7.5,
      module: 'moment',
      version: '2.18.0',
      vulnerable_versions: '<2.19.3',
      patched_versions: '>=2.19.3',
      title: 'Regular Expression Denial of Service',
      path: ['test-reporter@1.0.0', 'moment@2.18.0'],
      advisory: 'https://nodesecurity.io/advisories/532',
    },
  ],
  message: '1 vulnerability found',
}

export const coupleVulnerabilities = {
  meta: {
    statusCode: 200,
    headers: {
      'x-nsp-request-id': '1522254809327:api-ff5689796-68xgb:21:jfatjc82:72265',
      vary: 'origin,accept-encoding',
      'content-type': 'application/json; charset=utf-8',
      'strict-transport-security': 'max-age=15768000',
      'x-frame-options': 'DENY',
      'x-xss-protection': '1; mode=block',
      'x-download-options': 'noopen',
      'x-content-type-options': 'nosniff',
      'cache-control': 'no-cache',
      'content-length': '605',
      date: 'Wed, 28 Mar 2018 16:33:29 GMT',
      via: '1.1 google',
      'alt-svc': 'clear',
      connection: 'close',
    },
  },
  data: [
    {
      id: 532,
      updated_at: '2017-11-29T17:55:56.935Z',
      created_at: '2017-09-21T20:40:00.889Z',
      publish_date: '2017-11-27T17:56:00.056Z',
      overview:
        'Moment is vulnerable to a low severity regular expression denial of service vulnerability.',
      recommendation: 'Update to version 2.19.3',
      cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
      cvss_score: 7.5,
      module: 'moment',
      version: '2.18.0',
      vulnerable_versions: '<2.19.3',
      patched_versions: '>=2.19.3',
      title: 'Regular Expression Denial of Service',
      path: ['test-reporter@1.0.0', 'moment@2.18.0'],
      advisory: 'https://nodesecurity.io/advisories/532',
    },
    {
      id: 532,
      updated_at: '2017-11-29T17:55:56.935Z',
      created_at: '2017-09-21T20:40:00.889Z',
      publish_date: '2017-11-27T17:56:00.056Z',
      overview:
        'Moment is vulnerable to a low severity regular expression denial of service vulnerability.',
      recommendation: 'Update to version 2.19.3',
      cvss_vector: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
      cvss_score: 7.5,
      module: 'moment',
      version: '2.18.0',
      vulnerable_versions: '<2.19.3',
      patched_versions: '>=2.19.3',
      title: 'Regular Expression Denial of Service',
      path: ['test-reporter@1.0.0', 'moment@2.18.0'],
      advisory: 'https://nodesecurity.io/advisories/532',
    },
  ],
  message: '2 vulnerabilities found',
}

export const noVulnerabilities = {
  meta: {
    statusCode: 200,
    headers: {
      'x-nsp-request-id': '1522255899080:api-ff5689796-nngb5:21:jfb2448p:42866',
      vary: 'origin,accept-encoding',
      'content-type': 'application/json; charset=utf-8',
      'strict-transport-security': 'max-age=15768000',
      'x-frame-options': 'DENY',
      'x-xss-protection': '1; mode=block',
      'x-download-options': 'noopen',
      'x-content-type-options': 'nosniff',
      'cache-control': 'no-cache',
      'content-length': '2',
      date: 'Wed, 28 Mar 2018 16:51:39 GMT',
      via: '1.1 google',
      'alt-svc': 'clear',
      connection: 'close',
    },
  },
  data: [],
  message: 'No known vulnerabilities found',
}

export const networkError = {
  statusCode: 502,
  headers: {},
  data: {
    message:
      'Client request error: getaddrinfo ENOTFOUND api.nodesecurity.io api.nodesecurity.io:443',
    statusCode: 502,
    error: 'Bad Gateway',
  },
  isServer: true,
}

export const verboseArgs = {
  _: ['check'],
  help: false,
  h: false,
  version: false,
  verbose: true,
  quiet: false,
  'warn-only': false,
  warnOnly: false,
  offline: false,
  reporter: 'teamcity',
  exceptions: [],
  $0: '/Users/user/Documents/_prj/nsp-reporter-teamcity/test-reporter/node_modules/.bin/nsp',
  baseUrl: 'https://api.nodesecurity.io',
  path: '/Users/user/Documents/_prj/nsp-reporter-teamcity/test-reporter',
  pkg: {
    name: 'test-reporter',
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
      nsp: 'nsp check --reporter teamcity',
    },
    keywords: [],
    author: '',
    license: 'ISC',
    dependencies: {nsp: '^3.2.1', 'nsp-reporter-teamcity': '^0.1.0'},
  },
  packagelock: {
    name: 'test-reporter',
    version: '1.0.0',
    lockfileVersion: 1,
    requires: true,
    dependencies: {
      'agent-base': {
        version: '4.2.0',
        resolved: 'https://registry.npmjs.org/agent-base/-/agent-base-4.2.0.tgz',
        integrity:
          'sha512-c+R/U5X+2zz2+UCrCFv6odQzJdoqI+YecuhnAJLa1zYaMc13zPfwMwZrr91Pd1DYNo/yPRbiM4WVf9whgwFsIg==',
        requires: {'es6-promisify': '5.0.0'},
      },
      'ansi-escapes': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.0.0.tgz',
        integrity:
          'sha512-O/klc27mWNUigtv0F8NJWbLF00OcegQalkqKURWdosW08YZKi4m6CnSUSvIZG1otNJbTWhN01Hhz389DW7mvDQ==',
      },
      'ansi-regex': {
        version: '2.1.1',
        resolved: 'https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz',
        integrity: 'sha1-w7M6te42DYbg5ijwRorn7yfWVN8=',
      },
      'ansi-styles': {
        version: '3.2.1',
        resolved: 'https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz',
        integrity:
          'sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==',
        requires: {'color-convert': '1.9.1'},
      },
      boom: {
        version: '5.2.0',
        resolved: 'https://registry.npmjs.org/boom/-/boom-5.2.0.tgz',
        integrity:
          'sha512-Z5BTk6ZRe4tXXQlkqftmsAUANpXmuwlsF5Oov8ThoMbQRzdGTA1ngYRW160GexgOgjsFOKJz0LYhoNi+2AMBUw==',
        requires: {hoek: '4.2.1'},
      },
      'builtin-modules': {
        version: '1.1.1',
        resolved: 'https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz',
        integrity: 'sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=',
      },
      camelcase: {
        version: '4.1.0',
        resolved: 'https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz',
        integrity: 'sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=',
      },
      chalk: {
        version: '2.3.2',
        resolved: 'https://registry.npmjs.org/chalk/-/chalk-2.3.2.tgz',
        integrity:
          'sha512-ZM4j2/ld/YZDc3Ma8PgN7gyAk+kHMMMyzLNryCPGhWrsfAuDVeuid5bpRFTDgMH9JBK2lA4dyyAkkZYF/WcqDQ==',
        requires: {
          'ansi-styles': '3.2.1',
          'escape-string-regexp': '1.0.5',
          'supports-color': '5.3.0',
        },
      },
      chardet: {
        version: '0.4.2',
        resolved: 'https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz',
        integrity: 'sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I=',
      },
      'cli-cursor': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz',
        integrity: 'sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=',
        requires: {'restore-cursor': '2.0.0'},
      },
      'cli-table2': {
        version: '0.2.0',
        resolved: 'https://registry.npmjs.org/cli-table2/-/cli-table2-0.2.0.tgz',
        integrity: 'sha1-LR738hig54biFFQFYtS9F3/jLZc=',
        requires: {colors: '1.2.1', lodash: '3.10.1', 'string-width': '1.0.2'},
      },
      'cli-width': {
        version: '2.2.0',
        resolved: 'https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz',
        integrity: 'sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=',
      },
      cliui: {
        version: '3.2.0',
        resolved: 'https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz',
        integrity: 'sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=',
        requires: {'string-width': '1.0.2', 'strip-ansi': '3.0.1', 'wrap-ansi': '2.1.0'},
      },
      'code-point-at': {
        version: '1.1.0',
        resolved: 'https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz',
        integrity: 'sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=',
      },
      'color-convert': {
        version: '1.9.1',
        resolved: 'https://registry.npmjs.org/color-convert/-/color-convert-1.9.1.tgz',
        integrity:
          'sha512-mjGanIiwQJskCC18rPR6OmrZ6fm2Lc7PeGFYwCmy5J34wC6F1PzdGL6xeMfmgicfYcNLGuVFA3WzXtIDCQSZxQ==',
        requires: {'color-name': '1.1.3'},
      },
      'color-name': {
        version: '1.1.3',
        resolved: 'https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz',
        integrity: 'sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=',
      },
      colors: {
        version: '1.2.1',
        resolved: 'https://registry.npmjs.org/colors/-/colors-1.2.1.tgz',
        integrity:
          'sha512-s8+wktIuDSLffCywiwSxQOMqtPxML11a/dtHE17tMn4B1MSWw/C22EKf7M2KGUBcDaVFEGT+S8N02geDXeuNKg==',
        optional: true,
      },
      'cross-spawn': {
        version: '5.1.0',
        resolved: 'https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz',
        integrity: 'sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=',
        requires: {'lru-cache': '4.1.2', 'shebang-command': '1.2.0', which: '1.3.0'},
      },
      cvss: {
        version: '1.0.2',
        resolved: 'https://registry.npmjs.org/cvss/-/cvss-1.0.2.tgz',
        integrity: 'sha1-32fpK/EqeW9J6Sh5nI2zunS5/NY=',
      },
      debug: {
        version: '3.1.0',
        resolved: 'https://registry.npmjs.org/debug/-/debug-3.1.0.tgz',
        integrity:
          'sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==',
        requires: {ms: '2.0.0'},
      },
      decamelize: {
        version: '1.2.0',
        resolved: 'https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz',
        integrity: 'sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=',
      },
      'error-ex': {
        version: '1.3.1',
        resolved: 'https://registry.npmjs.org/error-ex/-/error-ex-1.3.1.tgz',
        integrity: 'sha1-+FWobOYa3E6GIcPNoh56dhLDqNw=',
        requires: {'is-arrayish': '0.2.1'},
      },
      'es6-promise': {
        version: '4.2.4',
        resolved: 'https://registry.npmjs.org/es6-promise/-/es6-promise-4.2.4.tgz',
        integrity:
          'sha512-/NdNZVJg+uZgtm9eS3O6lrOLYmQag2DjdEXuPaHlZ6RuVqgqaVZfgYCepEIKsLqwdQArOPtC3XzRLqGGfT8KQQ==',
      },
      'es6-promisify': {
        version: '5.0.0',
        resolved: 'https://registry.npmjs.org/es6-promisify/-/es6-promisify-5.0.0.tgz',
        integrity: 'sha1-UQnWLz5W6pZ8S2NQWu8IKRyKUgM=',
        requires: {'es6-promise': '4.2.4'},
      },
      'escape-string-regexp': {
        version: '1.0.5',
        resolved:
          'https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz',
        integrity: 'sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=',
      },
      execa: {
        version: '0.7.0',
        resolved: 'https://registry.npmjs.org/execa/-/execa-0.7.0.tgz',
        integrity: 'sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=',
        requires: {
          'cross-spawn': '5.1.0',
          'get-stream': '3.0.0',
          'is-stream': '1.1.0',
          'npm-run-path': '2.0.2',
          'p-finally': '1.0.0',
          'signal-exit': '3.0.2',
          'strip-eof': '1.0.0',
        },
      },
      'external-editor': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/external-editor/-/external-editor-2.1.0.tgz',
        integrity:
          'sha512-E44iT5QVOUJBKij4IIV3uvxuNlbKS38Tw1HiupxEIHPv9qtC2PrDYohbXV5U+1jnfIXttny8gUhj+oZvflFlzA==',
        requires: {chardet: '0.4.2', 'iconv-lite': '0.4.19', tmp: '0.0.33'},
      },
      figures: {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/figures/-/figures-2.0.0.tgz',
        integrity: 'sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=',
        requires: {'escape-string-regexp': '1.0.5'},
      },
      'find-up': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz',
        integrity: 'sha1-RdG35QbHF93UgndaK3eSCjwMV6c=',
        requires: {'locate-path': '2.0.0'},
      },
      'get-caller-file': {
        version: '1.0.2',
        resolved: 'https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.2.tgz',
        integrity: 'sha1-9wLmMSfn4jHBYKgMFVSstw1QR+U=',
      },
      'get-stream': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz',
        integrity: 'sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=',
      },
      'graceful-fs': {
        version: '4.1.11',
        resolved: 'https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz',
        integrity: 'sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg=',
      },
      'has-flag': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz',
        integrity: 'sha1-tdRU3CGZriJWmfNGfloH87lVuv0=',
      },
      hoek: {
        version: '4.2.1',
        resolved: 'https://registry.npmjs.org/hoek/-/hoek-4.2.1.tgz',
        integrity:
          'sha512-QLg82fGkfnJ/4iy1xZ81/9SIJiq1NGFUMGs6ParyjBZr6jW2Ufj/snDqTHixNlHdPNwN2RLVD0Pi3igeK9+JfA==',
      },
      'hosted-git-info': {
        version: '2.6.0',
        resolved: 'https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.6.0.tgz',
        integrity:
          'sha512-lIbgIIQA3lz5XaB6vxakj6sDHADJiZadYEJB+FgA+C4nubM1NwcuvUr9EJPmnH1skZqpqUzWborWo8EIUi0Sdw==',
      },
      'https-proxy-agent': {
        version: '2.2.0',
        resolved: 'https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-2.2.0.tgz',
        integrity:
          'sha512-uUWcfXHvy/dwfM9bqa6AozvAjS32dZSTUYd/4SEpYKRg6LEcPLshksnQYRudM9AyNvUARMfAg5TLjUDyX/K4vA==',
        requires: {'agent-base': '4.2.0', debug: '3.1.0'},
      },
      'iconv-lite': {
        version: '0.4.19',
        resolved: 'https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.19.tgz',
        integrity:
          'sha512-oTZqweIP51xaGPI4uPa56/Pri/480R+mo7SeU+YETByQNhDG55ycFyNLIgta9vXhILrxXDmF7ZGhqZIcuN0gJQ==',
      },
      inquirer: {
        version: '3.3.0',
        resolved: 'https://registry.npmjs.org/inquirer/-/inquirer-3.3.0.tgz',
        integrity:
          'sha512-h+xtnyk4EwKvFWHrUYsWErEVR+igKtLdchu+o0Z1RL7VU/jVMFbYir2bp6bAj8efFNxWqHX0dIss6fJQ+/+qeQ==',
        requires: {
          'ansi-escapes': '3.0.0',
          chalk: '2.3.2',
          'cli-cursor': '2.1.0',
          'cli-width': '2.2.0',
          'external-editor': '2.1.0',
          figures: '2.0.0',
          lodash: '4.17.5',
          'mute-stream': '0.0.7',
          'run-async': '2.3.0',
          'rx-lite': '4.0.8',
          'rx-lite-aggregates': '4.0.8',
          'string-width': '2.1.1',
          'strip-ansi': '4.0.0',
          through: '2.3.8',
        },
        dependencies: {
          'ansi-regex': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz',
            integrity: 'sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=',
          },
          'is-fullwidth-code-point': {
            version: '2.0.0',
            resolved:
              'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
            integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
          },
          lodash: {
            version: '4.17.5',
            resolved: 'https://registry.npmjs.org/lodash/-/lodash-4.17.5.tgz',
            integrity:
              'sha512-svL3uiZf1RwhH+cWrfZn3A4+U58wbP0tGVTLQPbjplZxZ8ROD9VLuNgsRniTlLe7OlSqR79RUehXgpBW/s0IQw==',
          },
          'string-width': {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz',
            integrity:
              'sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==',
            requires: {'is-fullwidth-code-point': '2.0.0', 'strip-ansi': '4.0.0'},
          },
          'strip-ansi': {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz',
            integrity: 'sha1-qEeQIusaw2iocTibY1JixQXuNo8=',
            requires: {'ansi-regex': '3.0.0'},
          },
        },
      },
      'invert-kv': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz',
        integrity: 'sha1-EEqOSqym09jNFXqO+L+rLXo//bY=',
      },
      'is-arrayish': {
        version: '0.2.1',
        resolved: 'https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz',
        integrity: 'sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=',
      },
      'is-builtin-module': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz',
        integrity: 'sha1-VAVy0096wxGfj3bDDLwbHgN6/74=',
        requires: {'builtin-modules': '1.1.1'},
      },
      'is-fullwidth-code-point': {
        version: '1.0.0',
        resolved:
          'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz',
        integrity: 'sha1-754xOG8DGn8NZDr4L95QxFfvAMs=',
        requires: {'number-is-nan': '1.0.1'},
      },
      'is-promise': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz',
        integrity: 'sha1-eaKp7OfwlugPNtKy87wWwf9L8/o=',
      },
      'is-stream': {
        version: '1.1.0',
        resolved: 'https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz',
        integrity: 'sha1-EtSj3U5o4Lec6428hBc66A2RykQ=',
      },
      isexe: {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz',
        integrity: 'sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=',
      },
      lcid: {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz',
        integrity: 'sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=',
        requires: {'invert-kv': '1.0.0'},
      },
      'load-json-file': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz',
        integrity: 'sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=',
        requires: {
          'graceful-fs': '4.1.11',
          'parse-json': '2.2.0',
          pify: '2.3.0',
          'strip-bom': '3.0.0',
        },
      },
      'locate-path': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz',
        integrity: 'sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=',
        requires: {'p-locate': '2.0.0', 'path-exists': '3.0.0'},
      },
      lodash: {
        version: '3.10.1',
        resolved: 'https://registry.npmjs.org/lodash/-/lodash-3.10.1.tgz',
        integrity: 'sha1-W/Rejkm6QYnhfUgnid/RW9FAt7Y=',
      },
      'lru-cache': {
        version: '4.1.2',
        resolved: 'https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.2.tgz',
        integrity:
          'sha512-wgeVXhrDwAWnIF/yZARsFnMBtdFXOg1b8RIrhilp+0iDYN4mdQcNZElDZ0e4B64BhaxeQ5zN7PMyvu7we1kPeQ==',
        requires: {pseudomap: '1.0.2', yallist: '2.1.2'},
      },
      mem: {
        version: '1.1.0',
        resolved: 'https://registry.npmjs.org/mem/-/mem-1.1.0.tgz',
        integrity: 'sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=',
        requires: {'mimic-fn': '1.2.0'},
      },
      'mimic-fn': {
        version: '1.2.0',
        resolved: 'https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz',
        integrity:
          'sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==',
      },
      ms: {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/ms/-/ms-2.0.0.tgz',
        integrity: 'sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=',
      },
      'mute-stream': {
        version: '0.0.7',
        resolved: 'https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz',
        integrity: 'sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=',
      },
      'nodesecurity-npm-utils': {
        version: '6.0.0',
        resolved:
          'https://registry.npmjs.org/nodesecurity-npm-utils/-/nodesecurity-npm-utils-6.0.0.tgz',
        integrity:
          'sha512-NLRle1woNaT2orR6fue2jNqkhxDTktgJj3sZxvR/8kp21pvOY7Gwlx5wvo0H8ZVPqdgd2nE2ADB9wDu5Cl8zNg==',
      },
      'normalize-package-data': {
        version: '2.4.0',
        resolved:
          'https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.4.0.tgz',
        integrity:
          'sha512-9jjUFbTPfEy3R/ad/2oNbKtW9Hgovl5O1FvFWKkKblNXoN/Oou6+9+KKohPK13Yc3/TyunyWhJp6gvRNR/PPAw==',
        requires: {
          'hosted-git-info': '2.6.0',
          'is-builtin-module': '1.0.0',
          semver: '5.5.0',
          'validate-npm-package-license': '3.0.3',
        },
      },
      'npm-run-path': {
        version: '2.0.2',
        resolved: 'https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz',
        integrity: 'sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=',
        requires: {'path-key': '2.0.1'},
      },
      nsp: {
        version: '3.2.1',
        resolved: 'https://registry.npmjs.org/nsp/-/nsp-3.2.1.tgz',
        integrity:
          'sha512-dLmGi7IGixJEHKetErIH460MYiYIzAoxuVsloZFu9e1p9U8K0yULx7YQ1+VzrjZbB+wqq67ES1SfOvKVb/qMDQ==',
        requires: {
          chalk: '2.3.2',
          'cli-table2': '0.2.0',
          cvss: '1.0.2',
          'https-proxy-agent': '2.2.0',
          inquirer: '3.3.0',
          'nodesecurity-npm-utils': '6.0.0',
          semver: '5.5.0',
          wreck: '12.5.1',
          yargs: '9.0.1',
        },
      },
      'nsp-reporter-teamcity': {
        version: '0.1.0',
        resolved:
          'https://registry.npmjs.org/nsp-reporter-teamcity/-/nsp-reporter-teamcity-0.1.0.tgz',
        integrity:
          'sha512-lWdkpl49z8J1cMq4cHRPaMV7XejYzMakSoJ0LgYo5B0fGH71DqkLMfqBrWDfk1g1Va44tCArwujIu15NZRcNoA==',
        requires: {'teamcity-service-messages': '0.1.9'},
      },
      'number-is-nan': {
        version: '1.0.1',
        resolved: 'https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz',
        integrity: 'sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=',
      },
      onetime: {
        version: '2.0.1',
        resolved: 'https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz',
        integrity: 'sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=',
        requires: {'mimic-fn': '1.2.0'},
      },
      'os-locale': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz',
        integrity:
          'sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==',
        requires: {execa: '0.7.0', lcid: '1.0.0', mem: '1.1.0'},
      },
      'os-tmpdir': {
        version: '1.0.2',
        resolved: 'https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz',
        integrity: 'sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=',
      },
      'p-finally': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz',
        integrity: 'sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=',
      },
      'p-limit': {
        version: '1.2.0',
        resolved: 'https://registry.npmjs.org/p-limit/-/p-limit-1.2.0.tgz',
        integrity:
          'sha512-Y/OtIaXtUPr4/YpMv1pCL5L5ed0rumAaAeBSj12F+bSlMdys7i8oQF/GUJmfpTS/QoaRrS/k6pma29haJpsMng==',
        requires: {'p-try': '1.0.0'},
      },
      'p-locate': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz',
        integrity: 'sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=',
        requires: {'p-limit': '1.2.0'},
      },
      'p-try': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz',
        integrity: 'sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=',
      },
      'parse-json': {
        version: '2.2.0',
        resolved: 'https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz',
        integrity: 'sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=',
        requires: {'error-ex': '1.3.1'},
      },
      'path-exists': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz',
        integrity: 'sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=',
      },
      'path-key': {
        version: '2.0.1',
        resolved: 'https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz',
        integrity: 'sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=',
      },
      'path-type': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz',
        integrity: 'sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=',
        requires: {pify: '2.3.0'},
      },
      pify: {
        version: '2.3.0',
        resolved: 'https://registry.npmjs.org/pify/-/pify-2.3.0.tgz',
        integrity: 'sha1-7RQaasBDqEnqWISY59yosVMw6Qw=',
      },
      pseudomap: {
        version: '1.0.2',
        resolved: 'https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz',
        integrity: 'sha1-8FKijacOYYkX7wqKw0wa5aaChrM=',
      },
      'read-pkg': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz',
        integrity: 'sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=',
        requires: {
          'load-json-file': '2.0.0',
          'normalize-package-data': '2.4.0',
          'path-type': '2.0.0',
        },
      },
      'read-pkg-up': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz',
        integrity: 'sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=',
        requires: {'find-up': '2.1.0', 'read-pkg': '2.0.0'},
      },
      'require-directory': {
        version: '2.1.1',
        resolved: 'https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz',
        integrity: 'sha1-jGStX9MNqxyXbiNE/+f3kqam30I=',
      },
      'require-main-filename': {
        version: '1.0.1',
        resolved:
          'https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz',
        integrity: 'sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=',
      },
      'restore-cursor': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz',
        integrity: 'sha1-n37ih/gv0ybU/RYpI9YhKe7g368=',
        requires: {onetime: '2.0.1', 'signal-exit': '3.0.2'},
      },
      'run-async': {
        version: '2.3.0',
        resolved: 'https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz',
        integrity: 'sha1-A3GrSuC91yDUFm19/aZP96RFpsA=',
        requires: {'is-promise': '2.1.0'},
      },
      'rx-lite': {
        version: '4.0.8',
        resolved: 'https://registry.npmjs.org/rx-lite/-/rx-lite-4.0.8.tgz',
        integrity: 'sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ=',
      },
      'rx-lite-aggregates': {
        version: '4.0.8',
        resolved: 'https://registry.npmjs.org/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz',
        integrity: 'sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=',
        requires: {'rx-lite': '4.0.8'},
      },
      semver: {
        version: '5.5.0',
        resolved: 'https://registry.npmjs.org/semver/-/semver-5.5.0.tgz',
        integrity:
          'sha512-4SJ3dm0WAwWy/NVeioZh5AntkdJoWKxHxcmyP622fOkgHa4z3R0TdBJICINyaSDE6uNwVc8gZr+ZinwZAH4xIA==',
      },
      'set-blocking': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz',
        integrity: 'sha1-BF+XgtARrppoA93TgrJDkrPYkPc=',
      },
      'shebang-command': {
        version: '1.2.0',
        resolved: 'https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz',
        integrity: 'sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=',
        requires: {'shebang-regex': '1.0.0'},
      },
      'shebang-regex': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz',
        integrity: 'sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=',
      },
      'signal-exit': {
        version: '3.0.2',
        resolved: 'https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz',
        integrity: 'sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=',
      },
      'spdx-correct': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.0.0.tgz',
        integrity:
          'sha512-N19o9z5cEyc8yQQPukRCZ9EUmb4HUpnrmaL/fxS2pBo2jbfcFRVuFZ/oFC+vZz0MNNk0h80iMn5/S6qGZOL5+g==',
        requires: {'spdx-expression-parse': '3.0.0', 'spdx-license-ids': '3.0.0'},
      },
      'spdx-exceptions': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.1.0.tgz',
        integrity:
          'sha512-4K1NsmrlCU1JJgUrtgEeTVyfx8VaYea9J9LvARxhbHtVtohPs/gFGG5yy49beySjlIMhhXZ4QqujIZEfS4l6Cg==',
      },
      'spdx-expression-parse': {
        version: '3.0.0',
        resolved:
          'https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz',
        integrity:
          'sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==',
        requires: {'spdx-exceptions': '2.1.0', 'spdx-license-ids': '3.0.0'},
      },
      'spdx-license-ids': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.0.tgz',
        integrity:
          'sha512-2+EPwgbnmOIl8HjGBXXMd9NAu02vLjOO1nWw4kmeRDFyHn+M/ETfHxQUK0oXg8ctgVnl9t3rosNVsZ1jG61nDA==',
      },
      'string-width': {
        version: '1.0.2',
        resolved: 'https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz',
        integrity: 'sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=',
        requires: {
          'code-point-at': '1.1.0',
          'is-fullwidth-code-point': '1.0.0',
          'strip-ansi': '3.0.1',
        },
      },
      'strip-ansi': {
        version: '3.0.1',
        resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz',
        integrity: 'sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=',
        requires: {'ansi-regex': '2.1.1'},
      },
      'strip-bom': {
        version: '3.0.0',
        resolved: 'https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz',
        integrity: 'sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=',
      },
      'strip-eof': {
        version: '1.0.0',
        resolved: 'https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz',
        integrity: 'sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=',
      },
      'supports-color': {
        version: '5.3.0',
        resolved: 'https://registry.npmjs.org/supports-color/-/supports-color-5.3.0.tgz',
        integrity:
          'sha512-0aP01LLIskjKs3lq52EC0aGBAJhLq7B2Rd8HC/DR/PtNNpcLilNmHC12O+hu0usQpo7wtHNRqtrhBwtDb0+dNg==',
        requires: {'has-flag': '3.0.0'},
      },
      'teamcity-service-messages': {
        version: '0.1.9',
        resolved:
          'https://registry.npmjs.org/teamcity-service-messages/-/teamcity-service-messages-0.1.9.tgz',
        integrity:
          'sha512-agmBUllpL8n02cG/6s16St5yXYEdynkyyGDWM5qsFq9sKEkc+gBAJgcgJQCVsqlxbZZUToRwTI1hLataRjCGcw==',
      },
      through: {
        version: '2.3.8',
        resolved: 'https://registry.npmjs.org/through/-/through-2.3.8.tgz',
        integrity: 'sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=',
      },
      tmp: {
        version: '0.0.33',
        resolved: 'https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz',
        integrity:
          'sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==',
        requires: {'os-tmpdir': '1.0.2'},
      },
      'validate-npm-package-license': {
        version: '3.0.3',
        resolved:
          'https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.3.tgz',
        integrity:
          'sha512-63ZOUnL4SIXj4L0NixR3L1lcjO38crAbgrTpl28t8jjrfuiOBL5Iygm+60qPs/KsZGzPNg6Smnc/oY16QTjF0g==',
        requires: {'spdx-correct': '3.0.0', 'spdx-expression-parse': '3.0.0'},
      },
      which: {
        version: '1.3.0',
        resolved: 'https://registry.npmjs.org/which/-/which-1.3.0.tgz',
        integrity:
          'sha512-xcJpopdamTuY5duC/KnTTNBraPK54YwpenP4lzxU8H91GudWpFv38u0CKjclE1Wi2EH2EDz5LRcHcKbCIzqGyg==',
        requires: {isexe: '2.0.0'},
      },
      'which-module': {
        version: '2.0.0',
        resolved: 'https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz',
        integrity: 'sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=',
      },
      'wrap-ansi': {
        version: '2.1.0',
        resolved: 'https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz',
        integrity: 'sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=',
        requires: {'string-width': '1.0.2', 'strip-ansi': '3.0.1'},
      },
      wreck: {
        version: '12.5.1',
        resolved: 'https://registry.npmjs.org/wreck/-/wreck-12.5.1.tgz',
        integrity:
          'sha512-l5DUGrc+yDyIflpty1x9XuMj1ehVjC/dTbF3/BasOO77xk0EdEa4M/DuOY8W88MQDAD0fEDqyjc8bkIMHd2E9A==',
        requires: {boom: '5.2.0', hoek: '4.2.1'},
      },
      y18n: {
        version: '3.2.1',
        resolved: 'https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz',
        integrity: 'sha1-bRX7qITAhnnA136I53WegR4H+kE=',
      },
      yallist: {
        version: '2.1.2',
        resolved: 'https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz',
        integrity: 'sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=',
      },
      yargs: {
        version: '9.0.1',
        resolved: 'https://registry.npmjs.org/yargs/-/yargs-9.0.1.tgz',
        integrity: 'sha1-UqzCP+7Kw0BCB47njAwAf1CF20w=',
        requires: {
          camelcase: '4.1.0',
          cliui: '3.2.0',
          decamelize: '1.2.0',
          'get-caller-file': '1.0.2',
          'os-locale': '2.1.0',
          'read-pkg-up': '2.0.0',
          'require-directory': '2.1.1',
          'require-main-filename': '1.0.1',
          'set-blocking': '2.0.0',
          'string-width': '2.1.1',
          'which-module': '2.0.0',
          y18n: '3.2.1',
          'yargs-parser': '7.0.0',
        },
        dependencies: {
          'ansi-regex': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz',
            integrity: 'sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=',
          },
          'is-fullwidth-code-point': {
            version: '2.0.0',
            resolved:
              'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
            integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
          },
          'string-width': {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz',
            integrity:
              'sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==',
            requires: {'is-fullwidth-code-point': '2.0.0', 'strip-ansi': '4.0.0'},
          },
          'strip-ansi': {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz',
            integrity: 'sha1-qEeQIusaw2iocTibY1JixQXuNo8=',
            requires: {'ansi-regex': '3.0.0'},
          },
        },
      },
      'yargs-parser': {
        version: '7.0.0',
        resolved: 'https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz',
        integrity: 'sha1-jQrELxbqVd69MyyvTEA4s+P139k=',
        requires: {camelcase: '4.1.0'},
      },
    },
  },
}
