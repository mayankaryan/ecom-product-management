import { createLogger, transports, format} from "winston";

export const logger = createLogger ({
    transports: [
        new transports.File({
            dirname:'logs',
            filename: 'error.log',
            level:'error'
        }),
        new transports.File({
            dirname:'logs',
            filename:'combined.log'
        })
    ],
    format: format.combine (
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp, level,message})=> {
            return `[${timestamp}] ${level}: ${message}`;
        })
    )
})