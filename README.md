# DOM-Analyzer
This script comes handy when you want to optimize your DOM, for speed or SEO purposes. It just recreates the DOM in a JS object, ordering each level by the criteria you choose. It's useful to find nodes that are specially heavy or have too many children (which is usually bad when comes to rendering the page).

You can find a Chrome extension for an easy-to-use version here: https://chrome.google.com/webstore/detail/dom-analyzer/hjaomadfoogedimonbneolajleaneifj

## Order criteria
- nodes: Number of nodes that are behind the current node.
- depth: max. depth of the children nodes / max. no. of levels.
- length: size of the outerHTML (without spaces).

## Example
Open the Chrome console on the page you want to analyze, paste the function and run it `analyzeDOM()`. Optionally, you can set which order criteria you want to use (nodes, depth or length), e.g., `analyzeDOM('depth')`. Default is length.

You can also pass as a second parameter a DOM element, otherwise `document` will be used.

Say you are the webmaster of 'nytimes.com' and you want to analyze the depth of the DOM because of whatever. Then, you could use this tool ordering by depth to find where your webpage is doing worst.

This in an example output from nytimes.com:
![](https://raw.githubusercontent.com/cnavast/DOM-Analyzer/master/example/nytimes.png)

The nodes on each level are ordered by the criteria you have chosen, and for each node you can directly access the element (by hovering or clicking on the 'element' attribute).
