import { IntlShape } from '@formatjs/intl';
import { setting } from '@/data/gameSettings'
import { locale_list } from '@/data/localeList';

type Props = {
  intl: IntlShape<string>;
};

export default async function Locale({ intl }: Props) {
  return <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
      {setting.locales.map((value) => {
        return (
          <div
            key={value.locale}
            className='grid grid-cols-1 gap-x-8 gap-y-2 border-b border-gray-900/10 pb-12 md:grid-cols-12'
          >
            <div className='col-span-1 md:col-span-4'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>最後通牒ゲーム</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>{locale_list.find((elm) => (elm.locale === value.locale))?.name}</p>
            </div>
            <div className='col-span-1 gap-x-6 gap-y-8 md:col-span-4'>
              {value.variables.map((element) => {
                return (
                  <div key={value.locale + '_' + element.key} className='mt-4 md:mt-8'>
                    <label
                      htmlFor='round_num'
                      className='text-sm font-semibold leading-6 text-gray-900'
                    >
                      {element.key}
                    </label>
                    <div className='mt-2'>
                      <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                        <input
                          type='text'
                          name='round_num'
                          id='round_num'
                          className='block flex-1 border-0 bg-transparent py-1.5 pr-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                          placeholder={element.locale}
                          defaultValue={element.locale}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  </div>;
}
