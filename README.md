#Redux Game of Life

## (redux-scuttlebutt edition)

This is a version of Redux Game of Life modified to work with a distributed
store, using [redux-scuttlebutt](https://github.com/grrowl/redux-scuttlebutt).
Most notably, we've removed some features not designed to work with such a model
and improved the purity of existing actions (for example, GridActions' RANDOM
now includes a seed in the payload, so it can produce deterministic results)

[Learn more about redux-scuttlebutt](https://medium.com/@grrowl/2346c51e3f39),
or [get in touch](https://twitter.com/grrowl).

----

**An educational implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using [React](https://github.com/facebook/react) and [Redux](https://github.com/rackt/redux)**

Features Redux and hot module replacement using the brand new React Transform by **[Dan Abramov](https://github.com/gaearon)**

*Check out the [demo](http://alanrsoares.github.io/redux-game-of-life/)*

## install dependencies
```bash
$ npm i
```

## start developmnent server
```bash
$ npm start
```

### see it running on [localhost:3000](http://localhost:3000)

## License

- [MIT](/LICENSE)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
