---
title: 'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0 - React Native'
slug: '/deprecated-gradle-features-used-react-native-error'
author: [Yuvaraj V]
tags: [react-native, razorpay, android]
featuredImage: ../images/razorpay-rn--gradle-version-error.png
date: '2021-02-13'
---

**ReactNative** is one of the popular cross platform mobile application authoring platform which is powered by the most popular frontend library [React](https://reactjs.org), same thing that powers the social media giant facebook's website. I encountred below error when I try to install [ react-native-razorpay](https://www.npmjs.com/package/react-native-razorpay) and run my RN project.

```bash
Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.2/userguide/command_line_interface.html#sec:command_line_warnings
24 actionable tasks: 17 executed, 7 up-to-date
/home/shivaraj/experiments/RazorpayRNapp/android/app/src/debug/AndroidManifest.xml Error:
        uses-sdk:minSdkVersion 16 cannot be smaller than version 19 declared in library [com.razorpay:checkout:1.6.4] /home/shivaraj/.gradle/caches/transforms-2/files-2.1/b770a516ee8ebbafcfdb55683fe44089/checkout-1.6.4/AndroidManifest.xml as the library might be using APIs not available in 16
        Suggestion: use a compatible library with a minSdk of at most 16,
                or increase this project's minSdk version to at least 19,
                or use tools:overrideLibrary="com.razorpay" to force usage (may lead to runtime failures)

FAILURE: Build failed with an exception.

```

I tried diffrent solutions/workarounds commented in [Razorpay's](https://razorpay.com) github [issue](https://github.com/software-mansion/react-native-gesture-handler/issues/640) page and [stackoverflow](https://stackoverflow.com/questions/61099048/deprecated-gradle-features-were-used-in-this-build-making-it-incompatible-with).

But nothing fixed the actual issue..

After that I just changed `minSdkVersion` property value in `android/build.gradle` to `19` from `16` that fixes the issue.

`youtube: https://www.youtube.com/watch?v=gzZHyefLu9o`

