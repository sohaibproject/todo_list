export class FetchException extends Error {
  constructor(public message: string ,public status: number ,public code = 'fetch error') {
    super(message)

    this.message = message
    this.code = code
    this.status = status
  }
}