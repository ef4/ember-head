ember-head
==============================================================================

This addon gives you a component for rendering content into `<head>`. It works in both the browser and in fastboot. This makes it ideal for things like Opengraph and Twitter Cards.

```hbs
{{#in-head}}
  <meta property="og:title" content="Babies">
  <meta property="og:description" content="Learn the shocking truth.">
  <meta property="og:image" content="https://example.com/example.jpg">
{{/in-head}}
```

You can put the above into any template, and as long as it stays rendered, the content will stay in the `<head>`. 


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-head
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
