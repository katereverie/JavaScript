# Style Elements with Bootstrap, Fontawesome

Bootstrap provides solutions to reponsive design

- Remember that `col` uses a 12-columns-system; so one block is 12 columns wide.

Fontawesome provides solutions to text-elements, provides pre-built icons, pre-built font-families.

Heed these

- Check if the styling class you are using actually is applicable to the element you are trying to style because not all framework styling classes are applicable to every HTML element

## text elements

Include:

  `h*`

Applicable Classes

  `text-primary` (color: soft-blueish)
  `text-center` (like `text-align: center;`)
  `text-danger` (color: soft-redish)

## image elements

Include:

  `img`

Applicable Classes

  `img-responsive`

## button elements

Include:

  `div`

Applicable Classes

1. Bootstrap
    - `row` (grid-layout: fit for `div` as wrapper/container)
    - `col-xs-*` (basically, all sizes: `col-md-*`, etc.)
    - `well` (creates a visual sense of depth for e.g. `div` columns for your row)
    - `btn`
    - `btn-default` (creates a blank/white rectangle button)
    - `btn-block` (size: its own block)
    - `btn-info` (color: soft-sky-blue)
    - `btn-danger` (color: soft-redish)

2. Fontawesome

    - `fa fa-thumbs-up` (thumbs-up icon)
    - `fa fa-info-circle` (info icon)
    - `fa fa-trash` (trash/delete icon)
    - `fa fa-paper-plane` (paper plane icon)

## form elements

Include:

  checkbox (`input` element of type `checkbox`)
  radio button (`input` element of type `radio`)

Applicable Classes

  `form-control`
