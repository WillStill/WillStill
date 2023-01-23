# XPath Exercise 3

1

a. `count(//sd)`, 524 
    
b. `//sd[contains (text (), "Russian")]`, 11

c. `//Scene/Heading/following-sibling::sd[1]`

d. `//Scene/Heading/following-sibling::sd[1][contains (text(), "computer")]`

e. `//Scene[not(sd)]`, 2 

2.

a. `//sp ! string()` returns text located inside the sp elements and within the children of sp. `//sp` will only return text found within the sp element and will ignore its children.

b. `//sp ! text()` will only highlight the text of the sp elements, but won't highlight `<sp>` or `</sp>`

c. `//sp ! text() ! string-length()`

d. `//sp ! text() ! string-length() => max()`

e. `/sp[string-length() eq max(//sp/string-length())]`

3.

a. `//sp[contains( text(), "Iraq")]/spk`

b. `//sp/spk/lower-case(.)`

c. `substring(//sp[contains( text(), "Iraq")]/spk, 2) => lower-case())`

UPDATED d. Was `for $i in () return (substring((//spk)[$i], 1, 1) || substring((//spk)[$i], 2) => lower-case())`. 

Updated version is `for $i in (//sp/spk) return (substring($i, 1, 1) || substring($i, 2) => lower-case())`