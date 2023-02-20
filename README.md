# accredify-cat-api

This is a cat wiki application for user to view, like and vote the cats he/she prefer to. The application is integrated with [the cat api](https://thecatapi.com/), developed with Vue 3, designed with Element Plus, tested with Jest.

You may access the demo link [here](https://holmesjj.github.io/accredify-cat-api/).

## Folder Structure

All source files should be placed into `src` directory. The contents are as follows:

- `api` - request files.
- `assets` - resouce files.
- `store` - state management.
- `router` - page paths.
- `styles` - style files for views.
- `views` - Entry pages: `home`, `favourite`, `vote` and `about`.
- `App.vue` - root of application.
- `main.js` - root component initialization.

All unit tests should be placed into `tests/unit` directory.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
