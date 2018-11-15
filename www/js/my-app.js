var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/add/',
            url: './pages/add.html',
        },
        {
            path: '/carro/',
            url: './pages/carro.html',
        },
        {
            path: '/moto/',
            url: './pages/moto.html',
        },
        {
            path: '/profile/',
            url: './pages/profile.html',
        },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');