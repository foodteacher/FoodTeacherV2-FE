import { FormControlProps, InputProps } from "@chakra-ui/react";
import { FieldErrors } from "react-hook-form";

/**userInfo */

export interface FormItem extends FormControlProps {
  errors: FieldErrors;
}

export interface SttInputProps extends InputProps {
  register?: any;
}
