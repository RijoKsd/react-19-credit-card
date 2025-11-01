import creditCardType, { types as cardTypes } from "credit-card-type";
import luhn from "luhn";

import { dankort, laser, visaElectron } from "./cardTypes";

/**
 * Check if a credit card number is valid using the Luhn algorithm
 */
export const validateLuhn = (value: string | number) => {
  try {
    // Some 'luhn' versions export directly, not with .validate
    return (luhn as any)(value);
  } catch {
    // fallback if library supports validate method
    return (luhn as any).validate?.(value);
  }
};

/**
 * Given a credit card number in the format (XXXX XXXX XXXX...) return it as a string without any spaces
 */
export const sanitizeNumber = (number: string | number) =>
  number.toString().trim().replace(/\s+/g, "");

/**
 * Return the issuer of a given credit card number or `unknown` if the issuer can't be identified
 */
export const getCardType = (cardNumber: string | number) => {
  const potentialCardTypes = creditCardType(sanitizeNumber(cardNumber));

  if (potentialCardTypes.length === 1) {
    const firstResult = potentialCardTypes.shift();
    return firstResult?.type || "unknown";
  }

  return "unknown";
};

/**
 * Configure the credit card types supported and return an array of valid types
 */
export const setInitialValidCardTypes = () => {
  // TypeScript doesn’t know about these methods, so we cast to 'any'
  (creditCardType as any).updateCard(cardTypes.MAESTRO, {
    patterns: [
      493698,
      [5000, 5018],
      [502000, 506698],
      [506779, 508999],
      [56, 59],
      63,
      67,
      6,
    ],
  });

  (creditCardType as any).updateCard(cardTypes.HIPERCARD, {
    patterns: [384100, 384140, 384160, 606282, 637095, 637568],
  });

  (creditCardType as any).addCard(dankort);
  (creditCardType as any).addCard(laser);
  (creditCardType as any).addCard(visaElectron);

  return Object.values(cardTypes).concat([
    "dankort",
    "laser",
    "visa-electron",
  ] as any);
};

/**
 * Provides a map of patterns to match for some card types
 */
export const cardTypesMap = {
  amex: ["amex", "americanexpress", "american-express"],
  dinersclub: ["diners", "dinersclub", "diners-club"],
  visaelectron: ["visaelectron", "visa-electron"],
};
