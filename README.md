# 🍄 Mushroom App 🍄

Welcome to the repository of the Mushroom Mobile App, a React Native application designed to support mushroom producers with an intuitive and powerful tool for managing their cultivation operations.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Usage](#installation--usage)

## Features

- **User Authentication**: Secure user authentication and authorization using a server in [Rails](https://github.com/emibotti/mushroom-api).
- **Organizations**: Create and manage organizations to group your cultivation operations.
- **Mushroom Cultivation Management**: Manage mushroom cultivation operations, including substrate preparation, inoculation, and fruiting.
- **Dashboard**: View key metrics and insights about your cultivation operations.
- **Redux Toolkit Query**: Use Redux Toolkit Query to manage server state and cache data.
- **Internationalization**: Support for multiple languages.
- **Pre-commit Hooks**: Ensure code quality and consistency with pre-commit hooks.

## Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) - Only Node.js LTS releases (even-numbered) are recommended.
- [Git](https://git-scm.com/) for source control.
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) (for Linux or macOS users).
- [Yarn](https://classic.yarnpkg.com/en/docs/install) for faster and more reliable dependency management.
- Android Studio or Xcode (for platform-specific builds)

For more specific information about the setup, please refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup) (CLI section).

## Installation & Usage

Clone the repository and install dependencies.

1. Clone the repository and move to the folder:

```bash
git clone git@github.com:emibotti/mushroom-app.git
cd mushroom-app
```

2. Copy & paste `.env.sample` and rename it as `.env`.

Fill the values with valid credentials, if not, the app will report errors in runtime.

This project depends on a server to work properly. You can find the server repository here: [Mushroom API](https://github.com/emibotti/mushroom-api).

3. Install dependencies:

```bash
yarn
```

4. Start the development server:

```bash
yarn start
```

5. Open a separate terminal tab and run the app (on a simulator or device):

```bash
yarn android
```

or

```bash
yarn ios
```

Other way is to open the project in Android Studio (opening `android` folder) or Xcode (opening `ios/MushroomApp.xcworkspace` file) and run the app from there.
