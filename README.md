# react-comp-lib

My component library for React using Tailwind CSS

<hr/>

## Usage

Base Setup:
- Have `React`, `TailwindCSS`
- Add [FontAwesome](https://fontawesome.com/) CDN to `index.html`
- Copy contents of `index.css`
- Add configs from `tailwing.config.js`

### Button

```js
import Button from "./components/buttons/Button";

<Button ...props />
```

Copy Folder: `src/components/buttons`

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

Copy Folder: `src/components/buttons`

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

<hr/>

### Input

```js
import Input from "./components/form/Input";

<Input type={inputType} ...props />
```

Copy Folder: `src/components/form`

Input:
- type ("text" (default) | "password" | "options")

#### Type: "text" | "password"
- Props:
  - value (string)    [**useState[0]**]
  - setValue  [**useState[1]**]
  - placeholder (string)
  - trim (bool)
  - small (bool)
  - tiny (bool) [**Use either small or tiny, not both if using**]
  - verify (function(value) => ({truth: bool, error: string}))  [Use to verify if value is allowed]

#### Type: "options"
- Props:
  - multiple (bool)
  - value (any | [any])    [**useState[0]**] <br/>
**NOTE**: Using *reference data types* as values may have undesirable outcomes. Use array for `value` only when `multiple` is `true`
  - setValue  [**useState[1]**]
  - options ([{name: string, value: any, disabled: bool (default `false`)}])

<hr/>

### Accordion

```js
import Accordion from "./components/accordion/Accordion";

<Accordion ...props data={accordionData} />
```

Copy Folder: `src/components/accordion`

Accordion:
- Props
  - multiple (bool (default: false) [Multiple open, or only single open]
- `accordionData`: [
  - title (string)
  - body (JSX Element)
]

### Tabs

```js
import Tabs from "./components/tabs/Tabs";

<Tabs data={tabsData}>
```

Copy Folder: `src/components/tabs`

Tabs
- `tabsData`: [
  - title (string)
  - body (JSX Element)
]
