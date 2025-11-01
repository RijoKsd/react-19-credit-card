// ✅ Import styles so they are included in the final bundle
import "./styles.scss";

// ✅ Export your component as the default export
export { ReactCreditCards as default } from "./ReactCreditCards";

// ✅ Export the types (optional, for TypeScript users)
export type {
  Focused,
  ReactCreditCardsProps,
  CallbackArgument,
} from "./ReactCreditCards";
