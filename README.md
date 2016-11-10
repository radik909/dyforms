# Dyforms

## Prerequisites:

Have node, npm & bower installed.

## To start the app:

  * Enter command `npm start`
  * Now you can visit [`localhost:8000`](http://localhost:8000) from your browser.

## To edit the form fields:

Edit the file `app/form.json`

## Details:

In the file `form.json`,

* `name` - name of the form
* `fields` - fields in the form (as an object)

Optional properties,

* required
* condition
* min(for `number` type)
* max(for `number` type)
