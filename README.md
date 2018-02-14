# center-anything

Css tricks for centering anything

## tricks

Assume we have a parent element and a child element, both are block level.

### 1. Zero Absolute Position

```html
<div class="parent">
    <div class="child"></div>
</div>
```

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

```html
<div class="table">
    <div class="parent">
        <div class="child"></div>
    </div>
</div>
```

```css
.table {
    display: table;
}
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

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

[demos/flex-display.html](demos/flex-display.html)

### 4. Transform Half

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.child {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

[demos/transform-half.html](demos/transform-half.html)

### 4. Writing Mode

```html
<div class="parent">
    <div class="middle">
        <div class="child"></div>
    </div>
</div>
```

```css
.parent {
    writing-mode: horizontal-tb;
}
.middle {
    margin-left: auto;
    margin-right: auto;
    writing-mode: vertical-rl;
    height: 100%;
}
.child {
    margin-top: auto;
    margin-bottom: auto;
}
```

[demos/writing-mode.html](demos/writing-mode.html)

## License

MIT © [Yanni Nightingale](https://yanni4night.github.io)