import { FC } from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: FC<ErrorMessageProps> = ({
  message = "Oops, something went wrong, please reload the page!",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
