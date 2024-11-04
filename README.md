## Project Launch

```
npm install - install the dependencies
npm run start:dev or npm run start:dev:vitt - launch the server + frontend of the project in dev mode
```

----

## Scripts

- `npm run start` - Launch frontend project on webpack dev server
- `npm run start:vite` - Launching a frontend project on vite
- `npm run start:dev` - Launch frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Launch frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Checking scss files with a linter
- `npm run lint:scss:fix` - Fixing scss files with a style linter
- `npm run test:unit` - Running unit tests with jest
- `npm run test:ui` - Running screenshot tests with loki
- `npm run test:ui:ok` - Confirmation of new screenshots
- `npm run test:ui:ci` - Running screenshot tests in CI
- `npm run test:ui:report` - Generating a complete report for screenshot tests
- `npm run test:ui:json` - Generation of a json report for screenshot tests
- `npm run test:ui:html` - Generating HTML report for screenshot tests
- `npm run storybook` - launch Storybook
- `npm run storybook:build` - Building a storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project is written in accordance with the Feature sliced design methodology

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Files with translations are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com /](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for just - `npm run test:unit`
2) Component tests with React testing library -`mpm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

Learn more about tests - [testing documentation](/docs/tests.md)

----

## Eslint

The project uses eslint to check typescript code and styleline to check files with styles.

Also, for strict control of the main architectural principles
, the proprietary eslint plugin *eclipse-plugin-multi-tv-plugin* is used,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within a single module
2) layer-imports - checks the correctness of using layers from the FSD point of view
((for example, widgets cannot be used in features and entities)
3) public-api-imports - allows imports from other modules only from the public api. It has an auto fix

##### Launching linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Correction of ts files by linter
- `npm run lint:scss` -  Checking css files with a style linter
- `npm run lint:scss:fix` - Fix css files with style linter
  
----

## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

The storycase file is created next to the component with the .stories.tsx extension

You can run storybrooke with the command:
- `npm run storybook`

Learn more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project Configuration

For development, the project contains 2 configs:
1. webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

The entire configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - configuration of the test environment
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.
----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
ci runs all kinds of tests, builds the project and Storybook, linting.

In the pre-commit hooks, we check the project with linters, config in /.husky

----

### Working with data

Interaction with these users is carried out using a set of redux toolkit.
Opportunities reused opportunities do not necessarily need to be normalized using EntityAdapter

Try to find the answer using [RTK query](/src/shared/api/rtcApi.ts)

To asynchronously connect the editors (so as not to pull them into a common bundle), use
[[Dynamicmoduleloader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

It is allowed to use feature flags only with the help of the toggleFeatures helper

an object with options is passed to it

{
name: name of the flag feature,
on: function that will work after the feature
is turned on of: function that will work after the feature is turned off
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. The name of the flag feature to be deleted
2. Status (on\off)
----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
