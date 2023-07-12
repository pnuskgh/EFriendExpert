export interface LoggerConfig {
  level: string,
  folder: string,
  filename: string,
  maxSize: number,
  maxFiles: number,
  useJson: boolean,
  useConsole: boolean,
  showFileInfo: boolean
}