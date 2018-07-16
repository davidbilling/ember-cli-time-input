[![Build Status](https://travis-ci.org/davidbilling/ember-cli-time-input.svg?branch=master)](https://travis-ci.org/davidbilling/ember-cli-time-input) [![Greenkeeper badge](https://badges.greenkeeper.io/davidbilling/ember-cli-time-input.svg)](https://greenkeeper.io/)

# ember-cli-time-input

Ember addon for time edit on date or array of dates in Ember.

After version 0.2.0 set your action to onChangedTime.
## Installation

```ember install ember-cli-time-input```

## Usage

The time-input component use moment "HH:mm" format. (Not yet configurable)

onChangedTime is called when the time has been updated. If an array of dates are submitted
the array will update the time on the current date assigned.

Usage with only one date:

```javascript
  {{time-input currentDate=yourDateTime onChangedTime=(action 'timeUpdated')}}
```
For versions before 0.2.0:
```javascript  
  {{time-input currentDate=yourDateTime action='timeUpdated'}}
```

Usage with array of dates:
```javascript
  {{#each myDateArray as |time|}}
    {{ember-cli-time-input currentDate=time arrayDates=myDateArray}}
  {{/each}}
```

The update will occur on the onblur event.

# Contributing

## Installation

* `git clone` this repository
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
