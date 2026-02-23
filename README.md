# ember-cli-time-input

[Short description of the addon.]

## Compatibility

- Ember.js v5.8 or above
- Ember CLI v5.8 or above
- Node.js v20 or above

## Installation

```
ember install ember-cli-time-input
```

## Usage

The time-input component use moment "HH:mm" format. (Not yet configurable)

onChangedTime is called when the time has been updated. If an array of dates are submitted
the array will update the time on the current date assigned.

The update will occur on the onblur event.

Usage with only one date:

```hbs
<TimeInput
  @currentDate={{this.yourDateTime}}
  @onChangedTime={{this.timeUpdated}}
/>
```

Usage with array of dates:

```hbs
{{#each myDateArray as |time|}}
  <TimeInput @currentDate={{time}} @arrayDates={{this.myDateArray}} />
{{/each}}
```

## Usage

## Installation

- `git clone` this repository
- `npm install`

## Running

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

- `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

## Building

- `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
