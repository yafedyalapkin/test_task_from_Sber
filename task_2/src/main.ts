// import './app.css'
// import App from './App.svelte'

// const app = new App({
//   target: document.getElementById('app'),
// })

// export default app



import App from './App.svelte';


const app = new App({
  target: document.body,
  // target: document.getElementById('app'),
  props: {},
});

export default app;
