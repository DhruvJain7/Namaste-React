# Laying the foundation

Q1.What is JSX?
JSX is a covention where HTML & JS are merged.  JSX is not HTML inside javascript. Rather it is JSX is a HTML like syntax or XML-like syntax . It is not a pure Javascript code browsers dont understand it . It is transpiled by Babel before it reaches the JS engine.

Q2.Superpowers of JSX?

JSX  makes our code Readable . It allows us to write Html along with Javascript.

JSX protects our websites or web apps from cross site scripts. It sanitises such data and than pass it.

Q3. Role of type attribute in script tag? What options can I use there?

The `type` attribute in a `<script>` tag specifies the MIME type (Media Type) of the script. This attribute is optional because the default value is `text/javascript`. However, you can use it to specify different types of scripts. Here are some options:

1. **text/javascript**: This is the default and most commonly used type for JavaScript code.
    
    html
    
    `<script type="text/javascript" src="script.js"></script>`
    
2. **module**: This indicates that the script is a JavaScript module, allowing you to use `import` and `export` statements.
    
    html
    
    `<script type="module" src="module.js"></script>`
    
3. **application/json**: This type indicates that the script contains JSON data.
    
    html
    
    `<script type="application/json" id="data">
      {
        "name": "John",
        "age": 30
      }
    </script>`
    
4. **application/ld+json**: This type is used for JSON-LD (Linked Data).
    
    html
    
    `<script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Jane Doe"
      }
    </script>`
    
5. **text/babel**: This type is used with Babel, a JavaScript compiler, to enable ES6+ syntax in browsers that do not support it.
    
    html
    
    `<script type="text/babel">
      // ES6 code here
    </script>`
    

The `type` attribute ensures that the browser interprets the script correctly. Feel free to ask if you need more details or have any other questions!

Q4.

{TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX?

They all are different ways of composting components inside another element or component. Fundamently they all are same .