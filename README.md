# Module TypeScript template for ScaleDynamics platform

This template is configured for the ScaleDynamics platform. It is ready to use to build your own app/service. All is pre-configured: we provide one command to develop with live reload (backend) and one to deploy to make it live on a url.

One particularity of our platform is that you don’t have to manage the [Express](https://expressjs.com/) layers, the platform manages them for you automatically, so you can focus only on the Node coding.

Note that you need a ScaleDynamics account for deployment (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/)).

This template is made with TypeScript. Since the platform for now don't process native TS code, it is compile in JS and then process with the definition files so you can use type and auto-completion in your client. 


## How to use

Go in `backend` folder and run those commands:

### Project setup

```sh
npm install
```

### Live-reload for development

To enter a live-reload development session, use the command below. Feel free to update the backend code, it will be rebuilt at each change.


```sh
npm run dev
```

Note that when running this command, you have to select a project. On the ScaleDynamics platform, a project identifies an application or a microservice. If you are logged, select an existing project or create a new one. You can also use the platform anonymously by selecting the `anonymous` project. For more details on projects, see the [documentation](https://docs.scaledynamics.com).

You can test the template by using:

```sh
npm run test
```

#### Deploy with ScaleDynamics

First you have to compile and minify your project for production.

```sh
npm run build
```

Then use your ScaleDynamics account credential to log in to the platform (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/))

```sh
npx warp login
```

Finally use the deploy command

```sh
npm run deploy
```

Note that when running this command, you have to select an environment. An environment identifies the cloud execution environment to run your app. You can create as many as you want like ‘staging’, ‘demo’, ‘prod’... Each environment has its own url.

To deploy, select an existing environment or create a new one. For more details on projects or environments, see the [documentation](https://docs.scaledynamics.com).

## Template structure

This project contains the backend with a node module. You can update the backend as you need to build your own app.

Regarding MongoDB, we provide a template module  in the `src/mongodb.ts`. To use your own MongoDB instance, replace the `URI` constant by your own.

```ts
const URI = 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]';
```


You can create new functions that can be called by other modules or frontend. Add them in `src/index.ts` or into another module and export it. The platform manages the [Express](https://expressjs.com/) layers automatically.


```ts
const myFunction = async (): Promise<T> => {
  // your code here
}

export { myFunction };
```

To access your new functions, feel free to adapt this code:

```ts
import Backend from 'backend';

const backend = new Backend();

backend.myFunction().then(() => {});
```
## Documentation

If you need more information, you can refer to the documentation:
  - [ScaleDynamics Platform](https://docs.scaledynamics.com/)
  - [MongoDB](https://docs.mongodb.com/guides/)
  - [TypeScript](https://www.typescriptlang.org/docs/)


## License

Copyright 2021 ScaleDynamics SAS. All rights reserved.
Licensed under the MIT license.