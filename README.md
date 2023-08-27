# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


How to deploy apps for free
Deploying single react applications and full-stack web applications using Heroku and Netlify.

SINGLE REACT APP ON HEROKU

1-Crie uma conta Heroku.
2-Crie seu aplicativo.
3-Baixe o Heroku CLI aqui.
4-Execute esses códigos.
heroku login
git init
heroku git:remote -a <app-name>
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -am "my first commit"
git push heroku master
Single React App on Netlify
Deploy using the browser
1-Construa seu aplicativo
yarn build
2-Arraste e solte sua pasta de construção na seção de upload manual do Netlify.

DEPLOY USING GITHUB

Connect to the Github
Choose your repository/branch
Change the deployment code to
CI= npm run build

DEPLOYING FULL-STACK APPS

1-Crie um aplicativo Heroku.
2-Altere a porta do seu aplicativo Node para
process.env.PORT || <any port number>
3-Mova seu aplicativo front-end para dentro do aplicativo Node.
4-Adicione esses códigos dentro do seu arquivo JS principal no seu aplicativo Node.
app.use(express.static(path.join(__dirname, "/<front end app folder name>/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/<front end app folder name>/build', 'index.html'));
});
5-Adicione este script ao seu package.json no aplicativo Node.
"heroku-postbuild": "cd client && npm install && npm run build"
6-Altere o URL da API em seu aplicativo React.

7-Defina suas variáveis de ambiente no Heroku

8-Execute esses códigos.

heroku login
git init
heroku git:remote -a <app-name>
git add .
git commit -am "my first commit"
git push heroku master