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
     |__components
     |__containers
     |__routes
     | |navigation.component.tsx
     | |__routeNames.enum.ts
     | |__routes.ts
     |__store
     | |__UserStore
     | | |__action.enum.ts
     | | |__types.d.ts
     | | |__user.action.creators.ts
     | | |__user.action.ts
     | | |__user.reducer.ts
     | |
     | |__rootReducer.ts
     | |__store.ts
     | |__types.d.ts
     |
     |__services(xhr)
         |__UserService(example)
         |__endpoints.enum.ts
         |__xhrConfig.ts

```
