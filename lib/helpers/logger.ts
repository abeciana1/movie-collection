type LogMethod = 'log' | 'warn' | 'error'

const logger = (
  method: LogMethod,
  ...args: Parameters<Console[LogMethod]>
): void => {
  if (process.env.NODE_ENV !== 'production') {
    console[method](...args)
    return
  }

  // TODO: Add production logger (e.g., Sentry)
}

export default logger