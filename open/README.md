# A teeny-tiny dotenv parser

```js
require("@teeny-tiny/open").config(/* URL */);
```


Values get parsed as json. Use // or # for comments in the dotenv file. As a perfectly parsable example:

```js
VERSION="1.0.10" // --> "1.0.10"
NAME="@teeny-tiny/dotenv" // --> "@teeny-tiny/dotenv"
PRODUCT_NAME="Tenny Tiny Dotenv Parser" // --> "Tenny Tiny Dotenv Parser"
MATH=< 1 + 1 > // --> "2" <-- process.env only accepts strings; requires activated "executeCode" option
```

## Credits
Thanks to the dotenv team for the inspiration. Use their package [dotenv](https://npmjs.com/package/dotenv) for a fully-fledged dotenv parser.