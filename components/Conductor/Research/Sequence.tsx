'use client';

import { Listbox, Transition } from '@headlessui/react';
import {
  PencilIcon,
  DocumentCheckIcon,
  PlayIcon,
  GiftIcon,
  CheckIcon,
  ChevronUpDownIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { useIntl } from 'react-intl';
import SubmitButton from '@/components/SubmitButton';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const setting = {
  timeline: [
    {
      id: 1,
      game_id: 1,
      result: false,
      continue: false,
      max: 1,
      min: 0,
      peymentType: 'join',
      peyment: [
        {
          category: 'A',
          rate: {
            english: 10,
            japanese: 1000,
            spanish: 10,
          },
        },
      ],
    },
    {
      id: 2,
      game_id: 2,
      result: false,
      continue: false,
      max: 0,
      min: 0,
      peymentType: 'none',
      peyment: [
        {
          category: 'A',
          rate: {
            english: 0,
            japanese: 0,
            spanish: 0,
          },
        },
      ],
    },
    {
      id: 3,
      game_id: 3,
      result: true,
      continue: true,
      max: 1000,
      min: 0,
      peymentType: 'point',
      peyment: [
        {
          category: 'A',
          rate: {
            english: 0.01,
            japanese: 1,
            spanish: 0.01,
          },
        },
      ],
    },
    {
      id: 4,
      game_id: 3,
      result: false,
      continue: false,
      max: 1000,
      min: 0,
      peymentType: 'point',
      peyment: [
        {
          category: 'A',
          rate: {
            english: 0.01,
            japanese: 1,
            spanish: 0.01,
          },
        },
        {
          category: 'B',
          rate: {
            english: 0.01,
            japanese: 1,
            spanish: 0.01,
          },
        },
      ],
    },
    {
      id: 5,
      game_id: 4,
      result: false,
      continue: false,
      max: 0,
      min: 0,
      peymentType: 'none',
      peyment: [
        {
          category: 'A',
          rate: {
            english: 0,
            japanese: 0,
            spanish: 0,
          },
        },
      ],
    },
  ],
  guest_list: [
    {
      no: 1,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:05',
      kickout: false,
    },
    {
      no: 2,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:06',
      kickout: true,
    },
    {
      no: 3,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:07',
      kickout: false,
    },
    {
      no: 4,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:08',
      kickout: false,
    },
    {
      no: 5,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:09',
      kickout: false,
    },
    {
      no: 6,
      guest_id: 'abc-def',
      guest_name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:10',
      kickout: false,
    },
  ],
  agreement: {
    pageTitle: {
      title: '同意説明',
      discription: '以下の説明文をよく読んでください。',
    },
    researchTitle: {
      titleHead: '研究課題名',
      title: '文化混在状況下における協力行動の動学的実証研究（その１）',
      discription:
        'この説明文は、あなたにこの研究の内容を正しく理解していただき、あなたの自由な意思に基づいて、この研究に参加するかどうかを判断していただくためのものです。<br />この研究への協力の同意は、あなたの自由意志で決めてください。同意しなくてもあなたの不利益になるようなことはありません。<br />また、一旦同意した場合でも、あなたが不利益を受けることなく、いつでも同意を撤回することができます。<br />以下の項目をよく読んで、同意できる場合は一番下にあるボタンを押して、同意書を表示してください。',
    },
    listItems: [
      {
        title: '研究について',
        discription:
          '研究の実施にあたっては、高知工科大学倫理審査委員会の審査を経て、研究機関の長より許可を受けています。この研究が許可されているのは<span className="underline">2028年3月31日</span>までです。<br />また、研究計画の変更、実施方法の変更が生じる場合には適宜審査を受け、安全性と人権に最大の配慮をします。',
      },
      {
        title: '研究の意義・目的',
        discription:
          'この研究では、人間の社会行動には一般的にどのような傾向があるかを明らかにする目的で実施されます。年齢、性別、住んでいる地域などの属性の違いが、信頼、協力、処罰などの行動に与える影響を検証します。',
      },
      { title: '研究の対象', discription: '18歳以上の日本在住者。' },
      {
        title: '研究の方法',
        discription:
          'この研究では、みなさんにコンピュータを操作してもらい、いくつかの質問に答えてもらいます。<br />最初に、みなさんの属性（年齢や性別など）に関する質問をします。<br />次に、みなさんをコンピュータ上でいくつかのグループにわけ、同じグループになった他の参加者とともに、ポイントを分け合う経済実験を行ってもらいます。この経済実験のポイントは、実験終了時にお渡しする実験報酬額と連動しています。<br />最後に、本日ご参加いただいた参稼報酬と、実験によって得られた実験報酬の合計額を、実験参加謝金としてお支払いします。',
      },
      {
        title: '予測される（物理的及び精神的）危険及びその対応',
        discription:
          '実験中に簡単な作業をしてもらう場合があります。その作業は誰にでもできる日常的な作業です。作業内容は実験前に詳細に説明します。あなたが支障がないと合意した場合にのみ実施していただきます。また、作業中にいつでも合意を取り消して中止することもできます。<br />不明な点がありましたら、実験前、実験後にかかわらず、実験実施者にお尋ねください。なお実験中は質問できない期間があります。',
      },
      {
        title: '研究対象者にもたらされる利益及び不利益',
        discription:
          'あなたは、実験参加によって報酬（実験参加謝金）を受け取ることができます。<br />あなたは、実験参加によって不利益を被る可能性は極めて少ないです。',
      },
      {
        title: '経済的負担や報酬について',
        discription:
          'あなたは、本日ご参加いただいた参加報酬（900円）と、実験によって得られた実験報酬（0円〜900円）の合計額（900円〜1,800円）を、実験参加謝金として実験終了時に受け取れます。<br />あなたは、実験前、実験中のいつでも実験を途中で中止して、実験室から出ることができます。実験を途中で中止した場合は、参加報酬（900円）だけを受け取れ、実験報酬（0円〜900円）は受け取れません。',
      },
      {
        title: '個人情報の保護について',
        discription:
          'この研究をすすめる上で必要な属性情報、心理的傾向、実験結果の情報以外は収集しません。データは匿名のID番号を用いて統計処理され、個人が特定できる情報と切り離して分析されます。また、対外的に報告される場合も、個人が特定できない集計した結果を報告しますので、個人が特定されることはありません。',
      },
      {
        title: 'データの保管について',
        discription:
          'この研究のデータは電子記憶媒体に保存し、高知工科大学永国寺キャンパスA609の鍵付き保管庫にて保管されます。データを分析する際は、セキュリティ対策が施されたコンピュータのみで処理されます。データの分析・保管は研究代表者が行います。<br />共同研究者が分析する場合は、研究代表者から個人が特定できない情報のみ貸出し、分析終了後に全データを回収して、研究代表者が保管します。',
      },
      {
        title: '研究の費用について',
        discription:
          'この研究は高知工科大学研究費及び科学研究費補助金 国際共同研究加速基金（国際共同研究強化（A))を原資に実施されます。',
      },
      {
        title: '利益相反について',
        discription:
          'この研究に関して、企業等との関わりや、研究成果や参加者の保護に影響を及ぼす可能性のあるすべての経済的利益関係等の状況はありません。',
      },
      {
        title: '研究に関する情報公開の方法について',
        discription:
          'この研究に参加した方々の個人情報の保護や、この研究の独創性の確保に支障がない範囲で、この研究の計画書や研究の方法に関する資料を閲覧することができます。資料の閲覧を希望される方はどうぞお申し出ください。<br />この研究の成果は、学会等にて学術雑誌等で公表されますが、あなた個人が特定される情報を削除した上で発表されます。',
      },
      {
        title: '研究の実施体制について',
        discription:
          'この研究は以下の体制で実施します。<br />研究実施場所：高知工科大学永国寺キャンパス<br />研究責任者：林 良平<br />研究分担者：小谷 浩示、Moinul Islam<br />共同研究機関：マッコーリー大学 経済実験研究室（オーストラリア）<br />研究分担者： Maroš Servátka',
      },
      {
        title: 'お問合せ',
        discription:
          'この研究に関して質問等がありましたら、以下の研究責任者にお問合せください。<br />所属：高知工科大学 経済・マネジメント学群<br />研究責任者：林 良平<br />住所：高知県高知市永国寺町２番２号<br />E-mail: hayashi.ryohei@kochi-tech.ac.jp',
      },
      { title: '説明日', discription: '2023年6月5日' },
      { title: '説明者', discription: '林 良平' },
    ],
    confirm: {
      discription: '上記の項目をよく読んで、同意できる場合は名前を入力してください。',
      buttonText: '同意',
    },
  },
  experiment: {},
  locales: [
    {
      language: 'English',
      variables: [
        { key: 'distributor', locale: 'distributor' },
        { key: 'respondent', locale: 'respondent' },
      ],
    },
    {
      language: '日本語',
      variables: [
        { key: 'distributor', locale: 'distributor' },
        { key: 'respondent', locale: 'respondent' },
      ],
    },
    {
      language: 'スペイン語',
      variables: [
        { key: 'distributor', locale: 'distributor' },
        { key: 'respondent', locale: 'respondent' },
      ],
    },
  ],
};

const games = [
  {
    id: 1,
    name: 'games_agreement',
    result: false,
    continue: true,
    icon: DocumentCheckIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 2,
    name: 'games_attributeSurvey',
    result: false,
    continue: true,
    icon: PencilIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 3,
    name: 'games_ultimatumGame',
    result: true,
    continue: true,
    icon: PlayIcon,
    min_num: 2,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    name: 'games_fee',
    result: true,
    continue: true,
    icon: GiftIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
];

export default function Sequence() {
  const { formatMessage } = useIntl();
  const [selected, setSelected] = useState(games[0]);

  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white space-y-12'>
      <form>
        <div className='space-y-12'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>実施する実験の追加</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>実施する実験を追加してください。</p>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='sm:col-span-4'>
                <div className='mt-2'>
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className='block  text-sm font-medium leading-6 text-gray-900'>
                          実施する実験
                        </Listbox.Label>
                        <div className='flex relative mt-2'>
                          <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <span className='block truncate'>{selected.name}</span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                              {games.map((game) => (
                                <Listbox.Option
                                  key={game.id}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-8 pr-4',
                                    )
                                  }
                                  value={game}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected ? 'font-semibold' : 'font-normal',
                                          'block truncate',
                                        )}
                                      >
                                        {game.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                          )}
                                        >
                                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>

                          <div className='ml-3 flex-shrink-0'>
                            <SubmitButton label='追加' />
                          </div>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>実験進行設定</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>実験進行条件を設定してください。</p>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='col-span-full'>
                <label htmlFor='street-address' className='block text-sm font-medium leading-6 text-gray-900'>
                  進行条件
                </label>
                <div className='flow-root mt-2'>
                  <ul role='list' className='-mb-8'>
                    {setting.timeline.map((event, eventIdx) =>
                      games
                        .filter((games) => games.id === event.game_id)
                        .map((game) => (
                          <li key={'timeline_' + event.id}>
                            <div className='relative pb-8'>
                              {eventIdx !== setting.timeline.length - 1 ? (
                                <span
                                  className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                                  aria-hidden='true'
                                />
                              ) : null}
                              <div className='relative flex space-x-3'>
                                <div>
                                  <span
                                    className={classNames(
                                      game.iconBackground,
                                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                                    )}
                                  >
                                    <game.icon className='h-5 w-5 text-white' aria-hidden='true' />
                                  </span>
                                </div>

                                <div className='relative block min-w-0 justify-start space-x-4 pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 hover:ring-indigo-600 group/game'>
                                  <div className='flex'>
                                    <p className='text-sm font-medium text-gray-900 group-hover/game:text-indigo-600 group-hover/game:font-semibold'>
                                      game.name
                                    </p>
                                    <XCircleIcon className='absolute right-1 top-1.5 h-5 w-5 text-red-300 hover:text-red-600 hover:font-semibold' />
                                  </div>
                                  {game.result && (
                                    <div className='relative flex items-start my-2'>
                                      <div className='flex h-6 items-center'>
                                        <input
                                          id='comments'
                                          aria-describedby='comments-description'
                                          name='comments'
                                          type='checkbox'
                                          defaultChecked={event.result}
                                          className='h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700'
                                        />
                                      </div>
                                      <div className='ml-3 text-sm leading-6'>
                                        <label htmlFor='comments' className='font-medium text-gray-900'>
                                          結果ページ表示
                                        </label>
                                      </div>
                                    </div>
                                  )}

                                  {game.continue && (
                                    <div className='relative flex items-start my-2'>
                                      <div className='flex h-6 items-center'>
                                        <input
                                          id='comments'
                                          aria-describedby='comments-description'
                                          name='comments'
                                          type='checkbox'
                                          defaultChecked={event.continue}
                                          className='h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700'
                                        />
                                      </div>
                                      <div className='ml-3 text-sm leading-6'>
                                        <label htmlFor='comments' className='font-medium text-gray-900'>
                                          個別進行
                                        </label>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </li>
                        )),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
