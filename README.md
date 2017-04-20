# DEPRECATED SEE [Shopify Polaris](https://github.com/Shopify/polaris)

# Shopify Admin Interface React

```
npm install shopify-ui --save
```

This is an effort at creating and organizing a library of React.js components that built from Shopify's backend Admin interface, created with the intent of building Shopify Applications with.

## Ideal World

There's a chrome extension called [`SnappySnippet`](https://chrome.google.com/webstore/detail/snappysnippet/blfngdefapoapkcdibbdkigpeaffgcil?hl=en) that allows you to select a element on a webpage in the Chrome Developer tools and export the HTML and CSS to jsbin, jsfiddle, or codepen. I haven't used it yet for this project but it is really extraordinary.  It does have some flaws in that it's not the best at getting psudo-selectors like `:before` and `after` and state modifiers like `:hover` and `:focus`. I tried tirelessly to get a clean copy of Shopify's checkbox (which is a pretty complicated piece of CSS / HTML ripe for modularity) and it wasn't simple.

I love the idea of extracting the CSS out of the [Shopify stylesheet](https://cdn.shopify.com/s/assets/admin/style-fbcba2bedee582049a0a8b26a9fbc56f.css) and having it live closer to the components themeselves, the neat thing about SnappySnippet is that it consolidated all of the `class` and `id` attributes to one custom `id` for each element apart of the tree. Even if the extension worked perfectly I'm still uncertain how to store CSS in a React.js component library.

With all this said, I'm looking forward to a future where it's much simpler to pull styles and elements from existing webpages into React components.
