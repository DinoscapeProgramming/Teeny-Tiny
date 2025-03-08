# A teeny-tiny dotenv parser

```js
require("@teeny-tiny/dotenv").config(
  /* Options:
    - path [default = "./.env"]: of the dotenv file
    - executeCode [default = false]: evaluate code contained in < code > brackets; do NOT activate unless necessary
  */
);
```


Values get parsed as json. Use // or # for comments in the dotenv file. As a perfectly parsable example:

```js
VERSION="1.0.8" // --> "1.0.8"
NAME="@teeny-tiny/dotenv" // --> "@teeny-tiny/dotenv"
PRODUCT_NAME="Tenny Tiny Dotenv Parser" // --> "Tenny Tiny Dotenv Parser"
MATH=< 1 + 1 > // --> "2" <-- process.env only accepts strings; requires activated "executeCode" option
```

## Credits
Thanks to the dotenv team for the inspiration. Use their package [dotenv](https://npmjs.com/package/dotenv) for a fully-fledged dotenv parser.