import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import locales from '../../Context/locales';
import { RootState } from '../../store/store';
import { addForm } from '../../store/features/dataFormSlice';
import useImage from '../useImage';
import { schema, Errors, Keys, FormData as FormDataTape } from '../schema';
import * as yup from 'yup';

export default function UnControlFormData() {
  const t = locales();
  const [errors, setErrors] = useState<Errors>({});
  const [fileImage, setImage, nameFile] = useImage();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countryList = useSelector((state: RootState) => state.country);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData: Partial<FormDataTape> = Object.fromEntries(form);

    formData.agree = form.has('agree');
    const country = countryList.find(
      (item) =>
        item.country === formData.country ||
        item.countryRus === formData.country
    );

    try {
      setErrors({});
      await schema.validate(formData, { abortEarly: false });
      dispatch(addForm({ ...formData, file: fileImage, ...country }));
      navigate('/');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors: Errors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path as Keys] = error.message;
          }
        });
        setErrors(errors);
      }
    }
  };

  return (
    <div className={s.form}>
      <form onSubmit={onSubmit}>
        <div className="name">
          <label htmlFor="name">{t.name}</label>
          <input name="name" id="name" type="text" placeholder={t.name} />
          <p>{errors?.name}</p>
        </div>

        <div className="age">
          <label htmlFor="age">{t.age}: </label>
          <input name="age" id="age" placeholder={t.age} type="number" />
          <p>{errors?.age}</p>
        </div>

        <div className="email">
          <label htmlFor="email">Email: </label>
          <input name="email" id="email" placeholder="Email" type="email" />
          <p>{errors?.email}</p>
        </div>

        <div className="password">
          <label htmlFor="password">{t.password}: </label>
          <input
            id="password"
            name="password"
            placeholder={t.password}
            type="password"
          />
          <p>{errors?.password}</p>
        </div>
        <div className="password">
          <label htmlFor="ConfirmPassword">{t.confirmPassword}: </label>
          <input
            id="ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            placeholder={t.confirmPassword}
          />
          <p>{errors?.ConfirmPassword}</p>
        </div>

        <div className={s.gender}>
          <label>{t.gender}: </label>
          <label>
            <input name="gender" type="radio" value="male" />
            {t.male}
          </label>

          <label>
            <input name="gender" type="radio" value="female" />
            {t.female}
          </label>
          <p>{errors?.gender}</p>
        </div>

        <div className="country">
          <label htmlFor="country">{t.country}: </label>
          <input
            id="country"
            name="country"
            list="country-list"
            placeholder={t.country}
          />
          <datalist id="country-list">
            {countryList.map((country) => {
              const countryName =
                t.country === 'Country' ? country.country : country.countryRus;
              return <option key={country.cca2} value={countryName}></option>;
            })}
          </datalist>
          <p>{errors?.country}</p>
        </div>

        <div>
          <label className="add_img" htmlFor="file">
            {nameFile || t.AddImage}
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
            accept=".png, .jpeg, .jpg"
            onChange={setImage}
          />
          <p>{errors?.file}</p>
        </div>

        <div className={s.agree}>
          <label htmlFor="agree">
            <input name="agree" id="agree" type="checkbox" />
            <span>{t.tc}</span>
          </label>
          <p>{errors?.agree}</p>
        </div>

        <input className={s.submit} type="submit" value={t.submit} />
      </form>
    </div>
  );
}
