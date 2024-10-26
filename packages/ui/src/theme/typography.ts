export const typography = {
  css: {
    '--tw-prose-body': `theme('colors.fd-foreground / 90%')`,
    '--tw-prose-headings': `theme('colors.fd-foreground')`,
    '--tw-prose-lead': `theme('colors.fd-foreground')`,
    '--tw-prose-links': `theme('colors.fd-foreground')`,
    '--tw-prose-bold': `theme('colors.fd-foreground')`,
    '--tw-prose-counters': `theme('colors.fd-muted.foreground')`,
    '--tw-prose-bullets': `theme('colors.fd-muted.foreground')`,
    '--tw-prose-hr': `theme('colors.fd-border')`,
    '--tw-prose-quotes': `theme('colors.fd-foreground')`,
    '--tw-prose-quote-borders': `theme('colors.fd-border')`,
    '--tw-prose-captions': `theme('colors.fd-foreground')`,
    '--tw-prose-code': `theme('colors.fd-foreground')`,
    '--tw-prose-th-borders': `theme('colors.fd-border')`,
    '--tw-prose-td-borders': `theme('colors.fd-border')`,
    '--tw-prose-kbd': `theme('colors.fd-foreground')`,
    '--tw-prose-kbd-shadows': `theme('colors.fd-primary.DEFAULT / 50%')`,
    // not used
    '--tw-prose-pre-bg': false,
    '--tw-prose-pre-code': false,
    fontSize: '16px',
    maxWidth: 'none',
    a: false,
    'a:hover': false,
    'a:not([data-card])': {
      color: 'var(--tw-prose-links)',
      transition: 'opacity 0.3s',
      fontWeight: '400',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      textDecorationColor: `theme('colors.fd-primary.DEFAULT')`,
    },
    'a:not([data-card]):hover': {
      opacity: '80%',
    },
    table: {
      fontSize: '14px',
    },
    'thead th': {
      textAlign: 'start',
    },
    h2: {
      fontWeight: '600',
    },
    code: {
      padding: '3px',
      border: 'solid 1px',
      fontSize: '13px',
      borderColor: `theme('colors.fd-border')`,
      borderRadius: '5px',
      fontWeight: '400',
      background: `theme('colors.fd-muted.DEFAULT')`,
    },
    kbd: {
      boxShadow:
        '0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows)',
    },
    ul: {
      paddingInlineStart: '1rem',
    },
    'ul > li': {
      paddingInlineStart: '0',
    },
    // Disabled styles, handled by Fumadocs UI
    'pre code': false,
    'pre code::after': false,
    'pre code::before': false,
    'code::after': false,
    'code::before': false,
  },
};
