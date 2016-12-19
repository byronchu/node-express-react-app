# Simple Express / Node / React App 

## Creating a new app and including React

- Create a new Node / Express app: `express --view=ejs --git my-new-app` and cd into the app directory

- As per the [Express React Views](https://github.com/reactjs/express-react-views) github, run `npm install express-react-views react react-dom -S` to install the required packages.

- Run npm install to install all required packages.

- In console, run `nodemon` to start a server. Open a browser and ensure localhost:3000 is responding.

- From [Express React Views](https://github.com/reactjs/express-react-views), add the following to your app.js file so it uses express:
```
  // app.js
  var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
```

- Rename 'views/index.ejs' to 'views/index.jsx' and set it up as a .jsx file type:
```
  import React from 'react'

  export default function Component({ title }) {
    return (
      <h1>{ title }</h1>
    )
  }
```

- Rename 'views/error.ejs' to 'views/error.jsx' and set it up as a .jsx file type:
```
  import React from 'react'
  export default function Component ( { message, error}) {
    return (
      <div>
          <h1>{message}</h1>
          <p>{error.status}</p>
          <p>{error.code}</p>
      </div> 
    )
  }
 ```

- In routes/index.js, change the title variable passed to the view to 'React' (just to be sure that the inex page is referencing the correct route).
```
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'React' });
  });

  module.exports = router;
```

- Assuming your server is running, go to localhost:3000 and ensure that the title 'React' is showing. Yeeha!

## Adding a standard layout

- Create a 'layout.jsx' file in the views folder and add a HTML template of commong HTML elements that will be required on each page:
```
  import React from 'react'

  export default function Layout({ children }) {
    return (
      <html>
          <head>
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
          </head>
          <body className='container' >
            <main>
                { children }
            </main> 
          </body>
      </html>
    )
  }
```

- In the 'views/index.js' page, require the new layouts.jsx file:
```
import Layout from './layout'
```

- And this layout can now be used to wrap around the elements displayed in the index.jsx (or any!) page, like so:
```
  import React from 'react'
  import Layout from './layout'

  export default function Component({ title }) {
    return (
      <Layout>
        <h1>{ title }</h1>
      </Layout>  
    )
  }
```

## Adding more React elements

- Pages are built up from multiple React elements. As our Layout has included Bootstrap, we can build and include a Jumbotron element.

- In the 'views' folder, create a 'bootstrap' folder, and add 'Jumbo.js':
```
  import React from 'react'

  export default function Jumbo({ heading, text }){
    return (
      <div className="jumbotron">
        <h1>{ heading }</h1>
        <p>{ text }</p>
      </div>
    )
  }
```
This Jumbotron component takes 2 arguments - one for the heading and one for the text - and returns a populated Jumbotron.

- Import the new Jumbo file you created into the 'views/index.js' file. Create a new Jumbo tag and feed it the heading and text values:
```
import React from 'react'
import Layout from './layout'
import Jumbo from './bootstrap/Jumbo'

export default function Component({ title }) {
  return (
    <Layout>
      <Jumbo heading='My Heading' text='this is some text' />
      <h1>{ title }</h1>
    </Layout>  
  )
}
```

- Refresh your localhost:3000 and voila - a Jumbotron! You can use this same method to add other bootstrap / html elements.

## Notes
- React's .jsx files replace the original .ejs files that express generates.
- Pages are built from multiple React components.
- When you create a new element, import it to use it in a view. If it gets too messy, create an intermediary file, require them all in there, and require _that_ file instead