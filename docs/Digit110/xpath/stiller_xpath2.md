# XPath Exercise 2

1. `//../occupation[@type]`

2. `distinct-values(//../occupation[@type])`

3. `count(distinct-values(//../occupation[@type]))`

4.

       a. `//../person/occupation[@type="artist"]`
    
       b. `//../person[//occupation[@type="artist"]]`
       
       c. `//person[@sex="f" and occupation[@type="artist"]]`
       
       d. `//person[occupation[@subtype="engraver"]]`
       
       e. `//person[occupation[@subtype="engraver"] and birth[@when="1787"]]`, William Finden
       
       f. `//person[occupation[@subtype="engraver"]]/birth`
       
       g. `//person[occupation[@subtype="engraver"]]/birth[@when] ! attribute() => sort()`
       
5. `//person/occupation[1]` lists the first occupation child of every person element. `(//person/occupation)[1]` lists the first instance of `//person/occupation`.