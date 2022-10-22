# XPath Exercise 1

1a. `//TEI/text/body/div` shows all of the `div` elements, of which there are 9

1b. `//TEI/text/body/div/listPerson`, some `div` elements have more than one `listPerson` element

1c. `//TEI/text/body/div[child::listPerson]` works. 4 of the `div` elements include `listPerson`.

1d. `//TEI/text/body/div[child::listPlace]` would work.

1e. `//listPlace/place` returns 204, but we could do `//../listPlace/place[parent::listPlace]` to make it funky. `listPlace` elements with `place` children are found only in `div` elements, which is why we dont need to use `..`

1f. `//place/placeName` returns any `placeName` elements with a parent `place` (263 results). `//place//placeName`  reads the  `//` and says "screw whatever come before that, we're looking at EVERY SINGLE PLACENAME." This is why we see the location of some `placeName` elements as `place/note/placeName`.


2a. `//div/*`

2b. `//list[@sortKey="animals"]/*`, 29

2c. `//*[@sortKey]`


3a. `//person`, 1223

3b. No, `//*[@sortKey]`, 1107

3c. `count(//person[@sex])`

3d. `count(//person[@sex]) div count(//person) * 100`, 90.5%

3e. `//person[@sex="f"]`, 327

3f. `count(//person[@sex="f"])`, 327