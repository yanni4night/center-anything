# center-anything

Css tricks for centering anything

## tricks

Assume we have a parent element and a child element, both are block level.

### 1. Zero Absolute Position

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

[demos/zero-absolute-position.html](./demos/zero-absolute-position.html)


### 2. Table Cell Display

```css
.parent {
  display: table-cell;
  vertical-align: middle;
}
.child {
  margin: auto;
}
```

[demos/tabel-cell-display.html](demos/tabel-cell-display.html)

### 3. Flex Display

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

[demos/flex-display.html](demos/flex-display.html)

### 4. Transform Half

```css
.child {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

[demos/transform-half.html](demos/transform-half.html)

## License

MIT © [Yanni Nightingale](http://yanni4night.com)