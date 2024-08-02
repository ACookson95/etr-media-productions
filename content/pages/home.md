---
title: Home
blocks:
  - tagline: Some Tag Line thing (this doesn't do anything)
    headline: 'HEADLINE: Custom Business Videography'
    text: |
      # Some Free text stuff #1

      Put whatever you want over here
    text2: |
      # Some Free text stuff #2

      Put whatever you want over here
    actions:
      - label: Action Thing
        type: button
        icon: false
        link: /
      - label: Action Link
        type: link
        icon: true
        link: /
    image:
      src: /uploads/filmer.webp
      alt: Filmer
    color: default
    _template: hero
  - items:
      - icon:
          name: BiCodeBlock
          color: red
          style: float
        title: Amazing Feature
        text: >-
          Aliquam blandit felis rhoncus, eleifend ipsum in, condimentum nibh.
          Praesent ac faucibus risus, eu lacinia enim.
      - icon:
          name: BiLike
          color: primary
          style: float
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          name: BiPalette
          color: green
          style: float
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: tint
    _template: features
  - quote: >-
      There are only two hard things in Computer Science: cache invalidation and
      naming things.
    author: Phil Karlton
    color: primary
    _template: testimonial
---
