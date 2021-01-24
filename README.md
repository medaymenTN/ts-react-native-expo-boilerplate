# Ts React Native Expo boilerplate

A simple RN/Expo App that provide the current feature for starting up a new projet

- Scalable file structure
- Login and register UI using NativeBase components
- Setup for Redux as a state managment library + example of store( userStore )
- Setup for navigation system between screen using React-navigation
- TypeScript    

## Setup

- clone the git repo
- `cd` to the git repo and run `yarn && yarn start`
- run the command `expo start`
- Install the [expo client](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) app on your phone
- Launch the expo client and scan the QR code

This should have the app running on your phone.


## File Structure

```
├── README.md
├── node_modules
├── package.json
├── app.json
├── App.tsx
├── .gitignore
└── src
    | |__asssets
    | | |__images
    | |
    | |__components
    | |__containers
    | |__i18n
    | | |__locales
    | | |__i18next.ts
    | |__middlewares
    | | |__middleware.ts
    | |__routes
    | | |__routes.ts
    | |__store
    | | |__UserStore
    | | | |__action.enum.ts
    | | | |__types.d.ts
    | | | |__user.action.creators.ts
    | | | |__user.action.ts
    | | | |__user.reducer.ts
    | | |
    | | |__rootReducer.ts
    | | |__store.ts
    | | |__types.d.ts
    | |
    | |__helpers
    | |__services(xhr)
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
    └── setupTests.js
```
