# react-comp-lib

My component library for React using Tailwind CSS

<hr/>

## Usage

### Button

```js
import Button from "./components/buttons/Button";

<Button ...props />
```

Button props:

- text (string)
- link (string)
- flat (bool)
- size ("small" | "large" | false)
- disabled (bool)
- outline (bool)
- classList ([string])
- func (function () => void)

<hr/>

### ButtonGroup

```js
import ButtonGroup from "./components/buttons/ButtonGroup";

<ButtonGroup ...props buttons={buttonGroupData} />
```

ButtonGroup:

- Props:
  - flat (bool)
  - small (bool)
  - outline (bool)
  - vertical (bool)
- Button keys (Added as attributes in `buttonGroupData`):
  - text (string)
  - link (string)
  - disabled (bool)
  - outline (bool)
  - classList ([string])
  - func (function () => void)

Example `buttonGroupData`:
```js
const buttonGroupData = [
  {
    text: "Link 1",
    link: "/",
    outline: true,
    func: ({ e }) => {
      console.log(e);
    },
  },
  {
    text: "Link 2",
    link: "/",
  },
  {
    text: "Link 3",
    link: "/",
    disabled: true,
    classList: ["text-black"],
  },
];
```
