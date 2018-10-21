export const required = (value: string) => (value ? undefined : 'Required');

export const mustnumber = (value: number) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const codeLength = (value: string) => 
  value && (value.length < 3 || value.length > 3) ? `Must be 3 characters long`: undefined

export const maxLength15 = maxLength(15);
export const maxLength250 = maxLength(250);

const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

const minValue = (min: number) => (value: number) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const minValue18 = minValue(18);

export const minAmount = (value: number) =>
  value && value < 1 ? 'Please enter an amount between £1 and £4,000' : undefined;