import log4js from "log4js";
import fs from 'fs';

// Ensure logs directory exists
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs', { recursive: true });
}

// Configure log4js
log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "logs/test.log" },
    errorFile: { type: "file", filename: "logs/error.log" },
    errorFilter: { 
      type: "logLevelFilter", 
      appender: "errorFile", 
      level: "error" 
    },
  },
  categories: {
    default: { appenders: ["console", "file", "errorFilter"], level: "debug" },
  },
});

const logger = log4js.getLogger();
export default logger;