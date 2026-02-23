/**
 * Central logger service. Use instead of console.* in production code paths.
 */
const isDev = import.meta.env.DEV;

export const logger = {
  info: (message: string, meta?: Record<string, unknown>) => {
    if (isDev) {
      console.info(message, meta ?? '');
    }
  },
  warn: (message: string, meta?: Record<string, unknown>) => {
    if (isDev) {
      console.warn(message, meta ?? '');
    }
  },
  error: (message: string, meta?: Record<string, unknown>) => {
    if (isDev) {
      console.error(message, meta ?? '');
    }
  },
  debug: (message: string, meta?: Record<string, unknown>) => {
    if (isDev) {
      console.debug(message, meta ?? '');
    }
  },
};
