import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import locales from '../../Context/locales';
import { RootState } from '../../store/store';
import { addForm } from '../../store/features/dataFormSlice';
import useImage from '../useImage';
import { schema, Errors, Keys } from '../schema';
import * as yup from 'yup';

export default function UnControlRef() {
  const t = locales();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const ConfirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderMRef = useRef<HTMLInputElement>(null);
  const genderFRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Errors>({});
  const [fileImage, setImage, nameFile] = useImage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countryList = useSelector((state: RootState) => state.country);

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      ConfirmPassword: ConfirmPasswordRef.current?.value,
      gender: genderMRef.current?.checked
        ? 'male'
        : genderFRef.current?.checked
          ? 'female'
          : '',
      country: countryRef.current?.value,
      agree: agreeRef.current?.checked,
      file: fileRef.current?.files,
    };

    const country = countryList.find(
      (item) =>
        item.country === data.country || item.countryRus === data.country
    );

    try {
      setErrors({});
      await schema.validate(data, { abortEarly: false });
      dispatch(addForm({ ...data, file: fileImage, ...country }));
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
          <input ref={nameRef} id="name" type="text" placeholder={t.name} />
          <p>{errors?.name}</p>
        </div>

        <div className="age">
          <label htmlFor="age">{t.age}: </label>
          <input ref={ageRef} id="age" placeholder={t.age} type="number" />
          <p>{errors?.age}</p>
        </div>

        <div className="email">
          <label htmlFor="email">Email: </label>
          <input ref={emailRef} id="email" placeholder="Email" type="email" />
          <p>{errors?.email}</p>
        </div>

        <div className="password">
          <label htmlFor="password">{t.password}: </label>
          <input
            ref={passwordRef}
            id="password"
            placeholder={t.password}
            type="password"
          />
          <p>{errors?.password}</p>
        </div>
        <div className="password">
          <label htmlFor="ConfirmPassword">{t.confirmPassword}: </label>
          <input
            ref={ConfirmPasswordRef}
            id="ConfirmPassword"
            type="password"
            placeholder={t.confirmPassword}
          />
          <p>{errors?.ConfirmPassword}</p>
        </div>

        <div className={s.gender}>
          <label>{t.gender}: </label>
          <label>
            <input name="gender" type="radio" value="male" ref={genderMRef} />
            {t.male}
          </label>

          <label>
            <input name="gender" type="radio" value="female" ref={genderFRef} />
            {t.female}
          </label>
          <p>{errors?.gender}</p>
        </div>

        <div className="country">
          <label htmlFor="country">{t.country}: </label>
          <input
            ref={countryRef}
            id="country"
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
            ref={fileRef}
            type="file"
            id="file"
            style={{ display: 'none' }}
            accept=".png, .jpeg, .jpg"
            onChange={setImage}
          />
          <p>{errors?.file}</p>
        </div>

        <div className={s.agree}>
          <label htmlFor="Agree">
            <input ref={agreeRef} id="Agree" type="checkbox" />
            <span>{t.tc}</span>
          </label>
          <p>{errors?.agree}</p>
        </div>

        <input className={s.submit} type="submit" value={t.submit} />
      </form>
    </div>
  );
}
