block('b-link').elem('e1')(
  tag()('span'),
  match(function () { return this.ctx.url })(
    tag()('a'),
    attrs()(function () { return { href: this.ctx.url }; }),
    mode('reset').attrs()({ href: undefined })
  )
)
