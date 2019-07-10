Run instructions for iOS:
  - cd your-project-folder && react-native run-ios
  - or -
  - Open ios/lunchapp.xcworkspace in Xcode
  - Hit the Run button

Run instructions for Android:
  - Have an Android emulator running (quickest way to get started), or a device connected.
  - cd your-project-folder && react-native run-android

After installing, run `react-native link` to update assets and gesture lib.
If you get an error with gestures lib, try `cd ios && pod install`