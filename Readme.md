# PlanU

PlanU is a React Native application for scheduling and managing appointments with recurring options.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm
* You have installed the React Native CLI
* You have installed Android Studio (for Android development)
* You have set up an Android emulator or have a physical Android device

## Installing PlanU

To install PlanU, follow these steps:

1. Clone the repository
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory
   ```
   cd planu
   ```
3. Install the dependencies
   ```
   npm install
   ```
4. Install vector icons
   ```
   npm install --save react-native-vector-icons
   ```
5. Link the vector icons (for Android)
   ```
   npx react-native link react-native-vector-icons
   ```

## Setting up the custom icon

1. Create an `assets` folder in your project root if it doesn't exist already.
2. Add your `planu-logo.png` file to the `assets` folder.
3. In `android/app/build.gradle`, add the following line under the `apply plugin: "com.android.application"` line:
   ```
   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
   ```

## Setting up the development environment

1. Install Android Studio
2. Install the Android SDK
3. Configure the ANDROID_HOME environment variable
4. Add platform-tools to your PATH

For detailed instructions, refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup).

## Running the app on Windows with Android emulator

1. Start an Android emulator from Android Studio or connect a physical Android device

2. Open a command prompt and navigate to your project directory

3. Run the following command to start the Metro bundler:
   ```
   npx react-native start
   ```

4. Open another command prompt, navigate to your project directory, and run:
   ```
   npx react-native run-android
   ```

This will build the app and install it on your emulator or connected device.

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are correctly installed
2. Try clearing the npm cache: `npm cache clean --force`
3. If the app fails to start, try running `npx react-native start --reset-cache`
4. For Android-specific issues, try clearing the Gradle cache: 
   `cd android && ./gradlew clean && cd ..`
5. If you have issues with the custom icon, ensure the `planu-logo.png` file is in the correct location and that you've linked the vector icons library correctly.

## Contributing to PlanU

To contribute to PlanU, follow these steps:

1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request

## Contact

If you want to contact the maintainer, you can reach out at <your-email@example.com>.

## License

This project uses the following license: [MIT License](<link-to-license>).
