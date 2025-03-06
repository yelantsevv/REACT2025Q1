import * as yup from 'yup';
import { countryList } from '../store/db';

export const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-ZА-ЯЁ]/, 'Name must start with a capital letter')
      .required(),
    age: yup
      .number()
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? undefined : value
      )
      .positive('Age must be a positive number')
      .required('Age is required'),
    email: yup.string().email('Invalid email address').required(),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required(),

    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Invalid gender')
      .required('Gender is required'),

    country: yup
      .string()
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? undefined : value
      )
      .oneOf(
        [
          ...countryList.flatMap((country) => {
            return [country.country, country.countryRus];
          }),
        ],
        'Invalid country'
      )
      .required('Country is required'),

    file: yup
      .mixed()
      .test('fileFormat', 'Unsupported file format', (value) => {
        return (
          value &&
          ['image/png', 'image/jpeg', 'image/jpg'].includes(
            (value as FileList)?.[0]?.type
          )
        );
      })
      .required('Image is required'),

    agree: yup.boolean().oneOf([true], 'You must agree').required(),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
export type Keys = keyof FormData;
export type Errors = Partial<Record<Keys, string>>;
