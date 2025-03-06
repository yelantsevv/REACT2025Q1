import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData, schema } from './schema';
import style from './reactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addForm } from '../../store/features/dataFormSlice';
import { useNavigate } from 'react-router';
import useImage from '../useImage';
import t from '../../Context/locales';
export default function ReactForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const countryList = useSelector((state: RootState) => state.country);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileImage, setImage] = useImage();
  const file = watch('file');
  const onSubmit = (data: FormData) => {
    const country = countryList.find(
      (item) =>
        item.country === data.country || item.countryRus === data.country
    );
    dispatch(addForm({ ...data, file: fileImage, ...country }));
    navigate('/');
  };
  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label htmlFor="name">{t('name')}</label>
          <input
            id="name"
            type="text"
            placeholder={t('name')}
            {...register('name')}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className="age">
          <label htmlFor="age">{t('age')}: </label>
          <input
            id="age"
            placeholder={t('age')}
            type="number"
            {...register('age')}
          />
          <p>{errors.age?.message}</p>
        </div>

        <div className="email">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            placeholder="Email"
            type="email"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="password">
          <label htmlFor="password">{t('password')}: </label>
          <input
            id="password"
            placeholder={t('password')}
            type="password"
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="password">
          <label htmlFor="ConfirmPassword">{t('confirm-password')}: </label>
          <input
            id="ConfirmPassword"
            type="password"
            placeholder={t('confirm-password')}
            {...register('ConfirmPassword')}
          />
          <p>{errors.ConfirmPassword?.message}</p>
        </div>

        <div className={style.gender}>
          <label htmlFor="gender">{t('gender')}: </label>
          <label>
            <input type="radio" value="male" {...register('gender')} />
            {t('male')}
          </label>

          <label>
            <input type="radio" value="female" {...register('gender')} />
            {t('female')}
          </label>
          <p>{errors.gender?.message}</p>
        </div>

        <div className="country">
          <label htmlFor="country">{t('country')}: </label>
          <input
            id="country"
            list="country-list"
            placeholder={t('country')}
            {...register('country')}
          />
          <datalist id="country-list">
            {countryList.map((country) => {
              const countryName =
                t('country') === 'Country'
                  ? country.country
                  : country.countryRus;
              return <option key={country.cca2} value={countryName}></option>;
            })}
          </datalist>
          <p>{errors.country?.message}</p>
        </div>

        <div>
          <label className="add_img" htmlFor="file">
            {(file as FileList)?.[0]?.name || t('Add-Image')}
          </label>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            accept=".png, .jpeg, .jpg"
            {...register('file', { onChange: setImage })}
          />
          <p>{errors.file?.message}</p>
        </div>

        <div className={style.agree}>
          <label htmlFor="Agree">
            <input id="Agree" type="checkbox" {...register('agree')} />
            <span>{t('tc')}</span>
          </label>
          <p>{errors.agree?.message}</p>
        </div>

        <input
          className={style.submit}
          type="submit"
          value={t('submit')}
          disabled={Object.keys(errors).length > 0}
        />
      </form>
    </div>
  );
}
