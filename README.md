jquery.contentify
=================

A jQuery plugin to generate a table of contents

# Usage

The below code snippet shows how to create the table of contents
in a container with ID `toc`.

```javascript
$('#toc').contentify({
  title:            'Table of Contents',
  headingSelectors: ['h1', 'h2', 'h3'],
  scrollDuration:   500
});
```

The `contentify` function accepts a settings object with the following
properties:

* `title` - The heading that will appear on top of the table of contents
(default: none / empty string)
* `headingSelectors` - An array of selectors that should be used to
identify headings. The selector at index `i` will be used to locate
headings on the i-th level (default `['h1', 'h2', 'h3', 'h4', 'h5']`).
* `scrollDuration` - Duration of the scrolling animation in
milliseconds (default: `1000`)

The title of the table of contents is wrapped in a `<div>` with a CSS
class of `contentify_title`. Moreover, the indivual sections are wrapped
in `<ol>` lists with a CSS class of `contentify_i` where `i` is the
level of the section.

# What Doesn't Work Yet

* Only one single selector can be specified for each level of headings.
It would be nice to be able to specify an array of selectors for each
level of headings.
* The CSS class names of the table of contents cannot be customized
