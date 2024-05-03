export interface ErrorType {
  errors: string | string[];
  title: string;
  textStart?: boolean;
  callback?: () => void;
}
