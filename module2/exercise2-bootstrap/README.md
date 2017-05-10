# Exercise 2 using Bootstrap

In this exercise, we are emulating the same structure as Exercise 2 / Exercise 3, but using Bootstrap instead of our own CSS.

## Things used in this exercise

* HTML
* CSS (can be external, internal, or inline)
* Bootstrap (<http://getbootstrap.com/>)

## Final result

![Browser Screenshot](screenshot.jpeg)

# Important notes

Bootstrap's logic is based on a grid system where:

* A `.container` wraps all the content that will be inserted within the grid system
* A `.row` declares each row
* The direct descendant of `.row` must be one or more `.col-md-*`
* A `.col-md-*` declares a column within a `.row`
* The grid system is based on 12 columns, meaning that
* The sum of `.col-md-*` **must** be 12 or less
