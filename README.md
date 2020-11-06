# CONFIG Files

Cross projects source configuration files.
There's minimal configurations editable for the needs of specific projects.

---

## Cross project tools

### [Browserslist](https://github.com/browserslist/browserslist)

-   Targets specific browsers used in different front-end tools

**Config**

    /project/.browserslistrc

---

### [Editorconfig](https://editorconfig.org/)

-   Helps maintain consistent coding styles across various editors and IDEs

**Config**

    /project/.editorconfig

---

### localhost.json

-   File for defining developers local url used for some tests (BackstopJS) etc.

**Config**

    /project/localhost.json.sample

---

### [dotenv](https://www.npmjs.com/package/dotenv)

Environment settings

    PORT=3000 - default port used for node server
    WEBPACK_PORT=3010 - webpack port
    PARCEL_PORT=3011 - parcel port
    BROWSERSYNC_PORT=8000 - browsersync port
    CYPRESS_PORT=8010 - cypress port
    STORYBOOK_PORT=8020 - storybook port
    SENDGRID_API_KEY='sendgrid-api-key'
    CHROMATIC_PROJECT_TOKEN='chromatic-project-token'

-   [webpack](https://webpack.js.org)
-   [parcel](https://parceljs.org)
-   [browsersync](https://www.browsersync.io)
-   [cypress](www.cypress.io)
-   [storybook](https://storybook.js.org)
-   [sendgrid](https://app.sendgrid.com)
-   [chromatic](https://www.chromatic.com)

**Config**

    /project/.env.sample

**Install**

    yarn add -D dotenv

---

### [.gitignore](https://git-scm.com/docs/gitignore)

-   Git ignore folders and files sample

**Config**

    /project/.gitignore.sample

---

### [.nvmrc](https://github.com/nvm-sh/nvm)

-   Set node version for users with nvm
-   You can use `nvm use` command to switch to node version in `.nvmrc` file

**Config**

    /project/.nvmrc.sample

---

### [package.json](https://npm.github.io/using-pkgs-docs/package-json/the-package-json-file.html)

-   Projects `package.json` sample file with some important records and tasks

**Config**

    /project/package.json.sample

---

### [Husky](https://github.com/typicode/husky)

-   run git commands from package (e.g. pre-commit)

**Config**

    /project/.huskyrc.sample

**Install**

    yarn add -D husky

---

### [lint-staged](https://github.com/okonet/lint-staged)

-   run linters only on staged files before commit

**Config**

    /project/.lintstagedrc.sample

**Install**

    yarn add -D lint-staged
