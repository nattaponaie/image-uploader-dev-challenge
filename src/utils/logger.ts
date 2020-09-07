import winston from 'winston';

// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.metadata(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

type ILogger<> = (
  message: string,
  meta?: { [header: string]: string | string[] | undefined }
) => winston.Logger;

export const logDebug: ILogger = (message, meta) => logger.debug(message, meta);
export const logInfo: ILogger = (message, meta) => logger.info(message, meta);
export const logWarning: ILogger = (message, meta) => logger.warn(message, meta);
export const logError: ILogger = (message, meta) => logger.error(message, meta);

export default logger;
