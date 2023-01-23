# XPath Exercise 4

`for $i in (//body//persName) return [string($i)] => normalize-space() => distinct-values()` Lists every persName element and their names in the file.


`count(for $i in (//body//persName) return [$i] => normalize-space() => distinct-values())` Count the names


`normalize-space(//body/p[@n="1"]) => string()` returns all text of the first paragraph