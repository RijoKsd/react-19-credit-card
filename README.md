# react-19-credit-card

A lightweight and modern **React 19-compatible** credit card component — inspired by `react-credit-cards-2`, rebuilt from scratch for React 19 support.

![demo](https://raw.githubusercontent.com/felquis/react-credit-cards-2/master/docs/media/rccs.gif)

---

## ✨ Features

- ⚛️ Compatible with **React 19**
- 💳 Realistic credit card preview (number, name, expiry, CVC)
- 🧩 Written in TypeScript
- 🎨 Includes built-in SCSS/CSS styling
- 🔧 Easy to integrate with forms (React Hook Form, Formik, etc.)

---

## 📦 Installation

```bash
npm install react-19-credit-card
```


### Usage

```jsx
🚀 Usage
import React, { useState } from "react";
import Cards from "react-19-credit-card";
import "react-19-credit-card/dist/es/index.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}

export default App;
```

| Prop      | Type                                      | Default                   | Description          |
| --------- | ----------------------------------------- | ------------------------- | -------------------- |
| `number`  | `string` or `number`                      | `""`                      | Credit card number   |
| `name`    | `string`                                  | `""`                      | Cardholder name      |
| `expiry`  | `string` or `number`                      | `""`                      | Expiry date (MM/YY)  |
| `cvc`     | `string` or `number`                      | `""`                      | CVC code             |
| `focused` | `"name"`, `"number"`, `"expiry"`, `"cvc"` | `""`                      | Highlighted field    |
| `preview` | `boolean`                                 | `false`                   | Enables preview mode |
| `locale`  | `{ valid: string }`                       | `{ valid: 'valid thru' }` | Custom locale text   |

### Features

- We support all credit card issuers available in [Payment](https://github.com/jessepollak/payment) plus Hipercard (a brazilian credit card).

## Props

- `name` {string}: Name on card. \*
- `number` {string|number}: Card number. \*
- `expiry` {string|number}: Card expiry date. `10/20` or `012017` \*
- `cvc` {string|number}: Card CVC/CVV. \*
- `focused` {string}: Focused card field. `name|number|expiry|cvc`
- `locale` {object}: Localization text (e.g. `{ valid: 'valid thru' }`).
- `placeholders` {object}: Placeholder text (e.g. `{ name: 'YOUR NAME HERE' }`).
- `preview` {bool}: To use the card to show scrambled data (e.g. `**** 4567`).
- `issuer` {string}: Set the issuer for the `preview` mode (e.g. `visa|mastercard|...`)
- `acceptedCards` {array}: If you want to limit the accepted cards. (e.g. `['visa', 'mastercard']`
- `callback` {func}: A callback function that will be called when the card number has changed with 2 paramaters: `type ({ issuer: 'visa', maxLength: 19 }), isValid ({boolean})`

\* _Required fields_

## SCSS options

**Credit Card sizing**

- `$rccs-card-ratio`: Card ratio. Defaults to `1.5858`
- `$rccs-size`: Card width. Defaults to `290px`

**Credit Card fonts**

- `$rccs-name-font-size`: Defaults to `17px`
- `$rccs-name-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-number-font-size`: Defaults to `17px`
- `$rccs-number-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-valid-font-size`: Defaults to `10px`
- `$rccs-expiry-font-size`: Defaults to `16px`
- `$rccs-expiry-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-cvc-font-size`: Defaults to `14px`
- `$rccs-cvc-font-family`: Defaults to `Consolas, Courier, monospace`
- `$rccs-cvc-color`: Defaults to `#222`

**Credit Card styling**

- `$rccs-shadow`: Defaults to `0 0 20px rgba(#000, 0.2)`
- `$rccs-light-text-color`: Card text color for dark cards. Defaults to `#fff`
- `$rccs-dark-text-color`: Card text color for light cards. Defaults to `#555`
- `$rccs-stripe-bg-color`: Stripe background color in the back. Defaults to `#2a1d16`
- `$rccs-signature-background`: Signature background in the back. Defaults to `repeating-linear-gradient(0.1deg, #fff 20%, #fff 40%, #fea 40%, #fea 44%, #fff 44%)`
- `$rccs-default-background`: Default card background. Defaults to `linear-gradient(25deg, #939393, #717171)`
- `$rccs-unknown-background`: Unknown card background. Defaults to `linear-gradient(25deg, #999, #999)`
- `$rccs-background-transition`: Card background transition. Defaults to `all 0.5s ease-out`
- `$rccs-animate-background`: Card background animation. Defaults to `true`

**Credit Card brands**

- `$rccs-amex-background`: Defaults to `linear-gradient(25deg, #308c67, #a3f2cf)`
- `$rccs-dankort-background`: Defaults to `linear-gradient(25deg, #ccc, #999)`
- `$rccs-dinersclub-background`: Defaults to `linear-gradient(25deg, #fff, #eee)`
- `$rccs-discover-background`: Defaults to `linear-gradient(25deg, #fff, #eee)`
- `$rccs-mastercard-background`: Defaults to `linear-gradient(25deg, #e8e9e5, #fbfbfb)`
- `$rccs-visa-background`: Defaults to `linear-gradient(25deg, #0f509e, #1399cd)`
- `$rccs-elo-background`: Defaults to `linear-gradient(25deg, #211c18, #aaa7a2)`
- `$rccs-hipercard-background`: Defaults to `linear-gradient(25deg, #8b181b, #de1f27)`

## Development
```bash
# Clone the repo
git clone https://github.com/RijoKsd/react-19-credit-card.git
# Install dependencies
npm install

# Run build
npm run build
```
## 🌐 Author & Links

**Author:** [Rijo Sebastian](https://github.com/RijoKsd)  
**GitHub:** [@RijoKsd](https://github.com/RijoKsd)  
**Website:** [rijoksd.netlify.app](https://rijoksd.netlify.app)

## LICENSE

This project is licensed under the [MIT License](LICENSE.md).
