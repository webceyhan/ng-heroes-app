export type LogType = 'info' | 'warning' | 'error';

export interface Log {
    type: LogType;
    message: string;
    timestamp: number;
}
