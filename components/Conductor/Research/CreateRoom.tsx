import { IntlShape } from '@formatjs/intl';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import type { Route } from 'next';
import Link from 'next/link';

const mode = [
  {
    name: 'class_mode',
    id: 'class',
    href: '#',
    description: 'class_mode_description',
    mostPopular: true,
  },
  {
    name: 'research_mode',
    id: 'research',
    href: '/research/restoration',
    description: 'research_mode_description',
    mostPopular: false,
  },
  {
    name: 'custom_mode',
    id: 'custom',
    href: '#',
    description: 'custom_mode_description',
    mostPopular: false,
  },
];

const sections = [
  {
    name: 'core_feature',
    feature: [
      {
        name: 'experiment_setting',
        mode: 'string',
      },
      {
        name: 'account',
        mode: 'string',
      },
      {
        name: 'reservation',
        mode: 'string',
      },
      {
        name: 'data_retention',
        mode: 'string',
      },
      {
        name: 'restoration',
        mode: { class_mode: false, research_mode: true, custom_mode: true },
      },
      {
        name: 'log',
        mode: { class_mode: false, research_mode: true, custom_mode: true },
      },
    ],
  },
  {
    name: 'class_room_feature',
    feature: [
      {
        name: 'graph',
        mode: { class_mode: true, research_mode: true, custom_mode: true },
      },
    ],
  },
  {
    name: 'research_feature',
    feature: [
      {
        name: 'subject_id',
        mode: { class_mode: false, research_mode: true, custom_mode: true },
      },
      {
        name: 'consent',
        mode: { class_mode: false, research_mode: true, custom_mode: true },
      },
      {
        name: 'fee',
        mode: { class_mode: false, research_mode: true, custom_mode: true },
      },
    ],
  },
];

type Props = {
  intl: IntlShape<string>;
};

export default async function CreateRoom({ intl }: Props) {
  return (
    <div className='isolate overflow-hidden'>
      <div className='relative'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
          {/* Feature comparison (up to lg) */}
          <section aria-labelledby='mobile-comparison-heading' className='lg:hidden'>
            <h2 id='mobile-comparison-heading' className='sr-only'>
              {intl.formatMessage({ id: 'create_room_mode_feature_comparison' })}
            </h2>

            <div className='mx-auto space-y-16'>
              {mode.map((tier) => (
                <div key={tier.id} className='border-t border-gray-900/10 group/tier'>
                  <div className='-mt-px w-full text-center border-t-2 pt-10 border-transparent group-hover/tier:border-indigo-600 group-focus/tier:border-indigo-600'>
                    <h3 className='text-sm font-semibold leading-6 text-gray-900 group-hover/tier:text-indigo-600 group-focus/tier:text-indigo-600'>
                      {intl.formatMessage({ id: `create_room_mode_${tier.name}` })}
                    </h3>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                      {intl.formatMessage({ id: `create_room_mode_${tier.description}` })}
                    </p>
                    <Link
                      href={tier.href as Route}
                      className='inline-flex w-72 md:w-80 mt-10 py-4 px-4 justify-center rounded-lg bg-indigo-50 border-indigo-200 border-[1px] text-gray-900 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-600 group-focus/tier:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      {intl.formatMessage({ id: `create_room_mode_${tier.name}` }) ===
                      intl.formatMessage({ id: 'create_room_mode_custom_mode' })
                        ? intl.formatMessage({ id: 'create_room_contact' })
                        : intl.formatMessage({ id: 'create_room_mode_create_room' })}
                    </Link>
                  </div>

                  <div className='mt-10 space-y-10'>
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className='text-sm font-semibold leading-6 text-gray-900'>
                          {intl.formatMessage({ id: `create_room_sections_${section.name}` })}
                        </h4>
                        <div className='relative mt-2'>
                          {/* Fake card background */}
                          <div
                            aria-hidden='true'
                            className='absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block'
                          />

                          <div className='relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-1 ring-gray-900/10'>
                            <dl className='divide-y divide-gray-200 text-sm leading-6'>
                              {section.feature.map((feature) => (
                                <div
                                  key={`sections_${feature.name}_name`}
                                  className='flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0'
                                >
                                  <dt className='pr-4 text-gray-600'>
                                    {intl.formatMessage({ id: `create_room_sections_${feature.name}_name` })}
                                  </dt>
                                  <dd className='flex items-center justify-end sm:justify-center sm:px-4'>
                                    {typeof feature.mode === 'string' ? (
                                      <span className='text-gray-900'>
                                        {intl.formatMessage({
                                          id: `create_room_sections_${feature.name}_${tier.name}`,
                                        })}
                                      </span>
                                    ) : (
                                      <>
                                        {feature.mode[tier.name as keyof typeof feature.mode] ? (
                                          <CheckIcon className='mx-auto h-5 w-5 text-indigo-600' aria-hidden='true' />
                                        ) : (
                                          <XMarkIcon className='mx-auto h-5 w-5 text-gray-400' aria-hidden='true' />
                                        )}

                                        <span className='sr-only'>
                                          {typeof feature.mode !== 'string' ? 'Yes' : 'No'}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-1 ring-gray-900/10 group-hover/tier:ring-2 group-focus/tier:ring-2 group-hover/tier:ring-indigo-600 group-focus/tier:ring-indigo-600'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section aria-labelledby='comparison-heading' className='hidden lg:block'>
            <h2 id='comparison-heading' className='sr-only'>
              {intl.formatMessage({ id: 'create_room_mode_feature_comparison' })}
            </h2>

            <div className='grid grid-cols-4 gap-x-8 border-gray-900/10 before:block'>
              {mode.map((tier) => (
                <div key={`head_id_${tier.id}`} aria-hidden='true' className='-mt-px group/tier'>
                  <div className='border-t-2 pt-10 border-transparent group-hover/tier:border-indigo-600'>
                    <p className='text-sm font-semibold leading-6 text-gray-900 group-hover/tier:text-indigo-600'>
                      {intl.formatMessage({ id: `create_room_mode_${tier.name}` })}
                    </p>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                      {intl.formatMessage({ id: `create_room_mode_${tier.description}` })}
                    </p>
                  </div>
                  <Link
                    href={tier.href as Route}
                    className='inline-flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    {intl.formatMessage({ id: `create_room_mode_${tier.name}` }) ===
                    intl.formatMessage({ id: 'create_room_mode_custom_mode' })
                      ? intl.formatMessage({ id: 'create_room_contact' })
                      : intl.formatMessage({ id: 'create_room_mode_create_room' })}
                  </Link>
                </div>
              ))}
            </div>

            <div className='-mt-6 space-y-16'>
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                    {intl.formatMessage({ id: `create_room_sections_${section.name}` })}
                  </h3>
                  <div className='relative -mx-8 mt-10'>
                    {/* Fake card backgrounds */}
                    <div
                      className='absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'
                      aria-hidden='true'
                    >
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                    </div>

                    <table className='relative w-full border-separate border-spacing-x-8'>
                      <thead>
                        <tr className='text-left'>
                          <th scope='col'>
                            <span className='sr-only'>
                              {intl.formatMessage({ id: 'create_room_mode_feature_comparison' })}
                            </span>
                          </th>
                          {mode.map((tier) => (
                            <th key={tier.id} scope='col'>
                              <span className='sr-only'>
                                {intl.formatMessage({ id: `create_room_mode_${tier.name}` })}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.feature.map((feature, featureIdx) => (
                          <tr key={`sections_${feature.name}_name`}>
                            <th
                              scope='row'
                              className='w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900'
                            >
                              {intl.formatMessage({ id: `create_room_sections_${feature.name}_name` })}
                              {featureIdx !== section.feature.length - 1 ? (
                                <div className='absolute inset-x-8 mt-3 h-px bg-gray-200' />
                              ) : null}
                            </th>
                            {mode.map((tier) => (
                              <td key={tier.id} className='relative w-1/4 px-4 py-0 text-center'>
                                <span className='relative h-full w-full py-3'>
                                  {typeof feature.mode === 'string' ? (
                                    <span className='text-sm leading-6 text-gray-900 group-hover/tier:font-semibold group-hover/tier:text-indigo-600'>
                                      {intl.formatMessage({ id: `create_room_sections_${feature.name}_${tier.name}` })}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.mode[tier.name as keyof typeof feature.mode] ? (
                                        <CheckIcon className='mx-auto h-5 w-5 text-indigo-600' aria-hidden='true' />
                                      ) : (
                                        <XMarkIcon className='mx-auto h-5 w-5 text-gray-400' aria-hidden='true' />
                                      )}

                                      <span className='sr-only'>{typeof feature.mode !== 'string' ? 'Yes' : 'No'}</span>
                                    </>
                                  )}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div
                      className='pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'
                      aria-hidden='true'
                    >
                      {mode.map((tier) => (
                        <div
                          key={tier.id}
                          className='rounded-lg ring-1 ring-gray-900/10 group-hover/tier:ring-2 group-hover/tier:ring-indigo-600'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='grid grid-cols-4 gap-x-8 before:block'>
              {mode.map((tier) => (
                <Link
                  key={`foot_id_${tier.id}`}
                  href={tier.href as Route}
                  className='inline-flex mt-10 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  {intl.formatMessage({ id: `create_room_mode_${tier.name}` }) ===
                  intl.formatMessage({ id: 'create_room_mode_custom_mode' })
                    ? intl.formatMessage({ id: 'create_room_contact' })
                    : intl.formatMessage({ id: 'create_room_mode_create_room' })}
                </Link>
              ))}
            </div>
          </section>
          <div className='my-10 text-sm text-gray-900'>* {intl.formatMessage({ id: 'create_room_notice' })}</div>
        </div>
      </div>
    </div>
  );
}
