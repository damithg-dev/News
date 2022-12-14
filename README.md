# News

## Coding guidelines and best practices

## Installation ⚙️

1. Download the repo with `git clone https://github.com/damithg-dev/News`
2. Run `yarn` to install the required dependencies
3. `cd` into `ios` and run `pod install` to install all iOS libraries
4. To start the app, run:
   - iOS: `react-native run-ios`
   - Android: `react-native run-android`

If developing for Android you might have to start the Android-emulator before running the app.

**Code Formatting**
We are using [Pretter](https://prettier.io/) to format the code, in [VS Code](https://code.visualstudio.com/) there is a package/plugin [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) that helps you format the code either `on save` or `manually`.

## Tech-stack 💻

- **React Native** and **TypeScript** for the mobile app
- **Firebase** for persistance (database) and hosting for the "real" CMS
