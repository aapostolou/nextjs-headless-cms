import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from './constants';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Optional: Hide the default locale in the URL (/about vs /en/about)
  localePrefix: 'as-needed',

  // Optional: Disable automatic locale detection based on the user's preferences
  localeDetection: false,
})
