# **React Native Technical Test**

This project is a boilerplate **[React Native](https://reactnative.dev/)** application set up with [React Navigation](https://reactnavigation.org/), [React Native Web](https://necolas.github.io/react-native-web/), and [Vite](https://vitejs.dev/). The aim of this technical test is to evaluate your capability to refactor existing code, handle challenges with builds, and your overall approach towards problem-solving.

## **📖 Description**

This React Native project works both on mobile (Android & iOS) and the web. It contains two screens as displayed in the directory structure, and these screens have been scaffolded with basic navigation and inline styles. The primary challenges revolve around refactoring the screen components and resolving build issues with Vite.

## **🚀 Getting Started**

> Note: Ensure you have completed the **[React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)** instructions up to the "Creating a new application" step before proceeding.
>

### **Step 1: Start the Metro Server**

Start **Metro**, the JavaScript bundler that comes with React Native, by executing the following command in the root directory of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### **Step 2: Launch your React Native Application**

With the Metro Bundler running in its terminal, open another terminal in the root directory of your project. Execute the following command to launch the app on Android or iOS:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Once everything is configured correctly, you should see your app running either in your Android Emulator or iOS Simulator. Alternatively, you can run the app directly from Android Studio or Xcode.

### **Step 3: Start Vite Server**

For the web version, you'll need the Vite server running. Open a new terminal in the root directory of your project and run:

```bash
# using npm
npm run dev

# OR using Yarn
yarn dev
```

## **🛠 Technical Challenges**

### **Challenge 1: Refactor Screen Components**

📌 Your task is to refactor the existing screens in the project. Currently, the styling and logic are mingled together within the component files. We encourage you to:

- Separate logic from the component composition.
- Separate the styles from the component logic.
- Enhance the component structure.
- Use any library or tools of your choice to improve styling. (Not Mandatory, is a plus)
- Get creative and showcase your coding style! (Not Mandatory, is a plus)

Here's an example of the current code structure:

```tsx
/* ... */
<Pressable
  style={{
     backgroundColor: '#b8e378',
     padding: 10,
     borderRadius: 5,
  }}
  onPress={() => navigate('Screen2')}>
   /* ... */
</Pressable>
/* ... */
```

### **Challenge 2: Resolve Vite Build Issues**

📌 The Vite development server runs smoothly. However, when attempting to create a production build, multiple errors arise. Your challenge:

```bash
# using npm
npm run build

# OR using Yarn
yarn build
```

- Investigate and tackle these build issues.
- Document any changes made and the reasons behind them.
- Note: Successfully resolving all issues is a plus, but not mandatory. The primary focus is on your problem-solving approach and the steps you take to debug and resolve.

## **📚 Project Dependencies**

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Web](https://necolas.github.io/react-native-web/)
- [Vite](https://vitejs.dev/)

## **🙌 Conclusion**

Best of luck with the technical test! We're excited to see your approach to the challenges and the solutions you come up with. Feel free to ask if you have any questions or need clarifications.
