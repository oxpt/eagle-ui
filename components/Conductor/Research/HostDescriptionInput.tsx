'use client';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

interface ResearchTitleProps {
  titleHead: string | null;
  title: string | null;
  description: string | null;
}

interface ListItemsProps {
  id: number;
  title: string | null;
  description: string | null;
}

interface ConfirmProps {
  description: string | null;
  buttonText: string | null;
}

export interface HostDescriptionChangeProps {
  locale: string;
  pageTitle: string;
  pageTitleDescription: string;
  researchTitle: ResearchTitleProps;
  details: ListItemsProps[];
  confirm: ConfirmProps;
}

function brToYn(htmlFor: string) {
  let result: string = htmlFor.replace(/<br\s*\/?>/gi, '\r\n');
  return result;
}

function ynToBr(htmlFor: string) {
  let result: string = htmlFor.replace(/[\r\n]/gi, '<br />');
  return result;
}

function encodeHTMLEntities(text: string) {
  let map: any = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (m: string) => map[m]);
}

function decodeHTMLEntities(text: string) {
  if (typeof window !== 'undefined') {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  } else {
    return text;
  }
}

function countBr(htmlFor: string) {
  let result: number = (htmlFor.match(/<br\s*\/?>/gi) || []).length;
  if (htmlFor.length > 40) {
    result = result + Math.floor(htmlFor.length / 40);
  }
  return result + 1;
}

export default function HostDescriptionChange(inputProps: HostDescriptionChangeProps) {
  const [title, setTitle] = useState(inputProps.pageTitle);
  const [titleDescription, setTitleDescription] = useState(inputProps.pageTitleDescription);
  const [researchItems, setResearchItems] = useState(inputProps.researchTitle);
  const [items, setItems] = useState(
    inputProps.details
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((elm, index) => Object.assign({}, elm, { id: index + 1 })),
  );
  const [confirmItems, setConfirmItems] = useState(inputProps.confirm);

  useEffect(() => {
    // ここで現在までの変更をサーバーに送る
    // そのあとで表示を変更する
    setTitle(inputProps.pageTitle);
    setTitleDescription(inputProps.pageTitleDescription);
    setResearchItems(inputProps.researchTitle);
    setItems(
      inputProps.details
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((elm, index) => Object.assign({}, elm, { id: index + 1 })),
    );
    setConfirmItems(inputProps.confirm);
  }, [inputProps.locale]);

  function handleDel(id: number) {
    let new_items = items
      .filter((elm) => elm.id !== id)
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((elm, index) => Object.assign(elm, { id: index + 1 }));
    setItems(new_items);
    console.log(new_items);
  }

  function handleAdd(id: number) {
    let new_items = items.map((elm) =>
      elm.id <= id ? Object.assign(elm, { id: elm.id }) : Object.assign(elm, { id: elm.id + 1 }),
    );

    new_items = [...new_items, { id: id + 1, title: '', description: '' }];
    new_items.sort((a, b) => (a.id > b.id ? 1 : -1)).map((elm, index) => Object.assign({}, elm, { id: index + 1 }));
    setItems(new_items);
  }

  function handleChange(
    parent_name: string,
    item_name: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: number,
  ) {
    e.stopPropagation();
    e.preventDefault();
    let new_item = JSON.parse(`{"${item_name}": "${encodeHTMLEntities(ynToBr(e.target.value))}"}`);
    switch (parent_name) {
      case 'researchTitle':
        setResearchItems(Object.assign({ ...researchItems, ...new_item }));
        break;
      case 'details':
        const old_item = items.find((elm) => elm.id === id);
        new_item = Object.assign({ ...old_item, ...new_item });
        const result = items.map((elm) => (elm.id !== id ? elm : new_item));
        setItems(result);
        break;
      case 'confirm':
        setConfirmItems(Object.assign({ ...confirmItems, ...new_item }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='px-1'>
        <input
          type='text'
          name='page_title'
          id='page_title'
          className='mt-2 text-4xl font-bold tracking-tight block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-6xl sm:leading-6'
          placeholder='ページタイトル'
          value={title ? brToYn(decodeHTMLEntities(title)) : ''}
          onChange={(e) => {
            setTitle(brToYn(decodeHTMLEntities(e.target.value)));
          }}
        />
        <textarea
          rows={countBr(titleDescription)}
          name='page_description'
          id='page_description'
          placeholder='ページタイトル下説明文'
          className='mt-6 text-lg leading-8 text-gray-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
          value={titleDescription ? brToYn(decodeHTMLEntities(titleDescription)) : ''}
          onChange={(e) => {
            setTitleDescription(brToYn(decodeHTMLEntities(e.target.value)));
          }}
        />
      </div>
      <div className='mt-6 px-1 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-1 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='mt-2 sm:mt-0 col-span-3 sm:col-span-1'>
              <input
                type='text'
                className='text-2xl font-medium leading-6 text-gray-900 w-full rounded-md hover:border-indigo-600 placeholder:text-gray-400 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
                value={researchItems.titleHead ? brToYn(decodeHTMLEntities(researchItems.titleHead)) : ''}
                onChange={(e) => handleChange('researchTitle', 'titleHead', e)}
                placeholder='研究課題名ラベル'
              />
            </dt>
            <dd className='mt-2 sm:mt-0 col-span-3  sm:col-span-2'>
              <input
                type='text'
                className='w-full mt-2 font-medium  leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded-md text-2xl hover:border-indigo-600 placeholder:text-gray-400 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                value={researchItems.title ? brToYn(decodeHTMLEntities(researchItems.title)) : ''}
                onChange={(e) => handleChange('researchTitle', 'title', e)}
                placeholder='研究課題名'
              />
            </dd>
            <dd className='mt-2 sm:mt-0 col-span-3  sm:col-span-3'>
              <textarea
                className='text-sm font-medium leading-6 text-gray-900 col-span-3 rounded-md w-full mt-2 sm:col-span-3 sm:mt-0  hover:border-indigo-600 placeholder:text-gray-400 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                rows={researchItems.description ? countBr(researchItems.description) : 5}
                value={researchItems.description ? brToYn(decodeHTMLEntities(researchItems.description)) : ''}
                onChange={(e) => handleChange('researchTitle', 'description', e)}
                placeholder='同意画面説明文'
              />
            </dd>
          </div>
          {items.map((elm) => {
            return (
              <div className='px-1 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0' key={'details_' + elm.id}>
                <dt className='mt-2 sm:mt-0 col-span-3 sm:col-span-1'>
                  <input
                    type='text'
                    name={'details_title_' + elm.id}
                    className='text-sm font-medium leading-6 text-gray-900 w-full rounded-md hover:border-indigo-600 placeholder:text-gray-400 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                    value={elm.title ? brToYn(decodeHTMLEntities(elm.title)) : ''}
                    onChange={(e) => handleChange('details', 'title', e, elm.id)}
                    placeholder={`${elm.title}タイトル`}
                  />
                </dt>
                <dd className='mt-2 sm:mt-0 col-span-3  sm:col-span-2'>
                  <textarea
                    name={'details_description_' + elm.id}
                    className='text-sm leading-6 text-gray-700 w-full rounded-md hover:border-indigo-600 placeholder:text-gray-400 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                    rows={researchItems.description ? countBr(researchItems.description) : 5}
                    value={elm.description ? brToYn(decodeHTMLEntities(elm.description)) : ''}
                    onChange={(e) => handleChange('details', 'description', e, elm.id)}
                    placeholder={`${elm.title}説明文`}
                  />
                </dd>
                <dd className='mt-2 sm:mt-0 col-span-3 text-right'>
                  <button
                    type='button'
                    className='mr-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700'
                    onClick={() => handleDel(elm.id)}
                  >
                    <MinusIcon className='h-3.5 w-3.5' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={() => handleAdd(elm.id)}
                  >
                    <PlusIcon className='h-3.5 w-3.5' aria-hidden='true' />
                  </button>
                </dd>
              </div>
            );
          })}
          <div className='px-1 py-6 grid-cols-3 sm:gap-4 sm:px-0'>
            <dd className='mt-2 sm:mt-0 col-span-3'>
              <textarea
                rows={confirmItems.description ? countBr(confirmItems.description) : 5}
                name='confirm_description'
                id='confirm_description'
                placeholder='同意ボタン前説明文'
                className='mt-6 text-lg leading-8 text-gray-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
                value={confirmItems.description ? brToYn(decodeHTMLEntities(confirmItems.description)) : ''}
                onChange={(e) => handleChange('confirm', 'description', e)}
              />
            </dd>
            <dd className='mt-2 sm:mt-0 col-span-3 text-center'>
              <input
                className='mt-6 text-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  placeholder:text-white'
                type='text'
                value={confirmItems.buttonText ? brToYn(decodeHTMLEntities(confirmItems.buttonText)) : ''}
                onChange={(e) => handleChange('confirm', 'buttonText', e)}
                placeholder='同意ボタン'
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
