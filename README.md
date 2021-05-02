# Description

The repository brings together a compilation with practical solutions in Google Script and Html
that I created while interning at the financial services company.

# Usage

The team mostly used googlesheets as a "database".
Therefore, the projects in this repository are intended for use in a Scripting editor
of google products.

# Contents

## chart-js.html, login.html and page-js.html
 Used within the googlesheets script editor in order to redirect
 the user to a screen with interactive dashboards. The dashboards are made with the google.charts library, which make
 graphs more interactive than sheets' charts, as well as being a good (and safer) alternative to view,
 in real time, only the updated graphics without having to expose the spreadsheets to the user.
 
## difference_arrays.gs
 The code accesses 2 multidimensional arrays in the spreadsheet, compares the elements between them,
 and returns only new elements considering one of the arrays as a reference.
 This code is useful when used as a macro when we want to add new elements
 one sheet from another, without repeating the elements previously added.

## negative.gs
 This function can be useful when combined with a time trigger.
 The function accesses a multidimensional array and turn positive numbers to negative. The script certifies
 that a column will always be negative, thus avoiding calculation errors in cost spreadsheets, for example.
 








