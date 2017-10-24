# new-react-component

A react component generator with cli

```
new-react-component <component-path>
```


## Example
```
$ new-react-component my-component

# Creates a component's folder as follows
my-component/
  MyComponent.js
  MyComponent.css
  package.json
```



## Options


|Name|Default|Description|
|:--|:-----|:----------|
|**`--no-style`**|`true`|disable style file creation|
|**`--style <style-extension>`**|`.css`|the style file extesion|
|**`--use-index`**|`error`|use index.js instead of package.json|
|**`--functional`**|`.css`|writes a functional component|
|**`--style-modules <bool>`**|`true`|Treat style as modular|
