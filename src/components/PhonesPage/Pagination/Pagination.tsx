import React from 'react';
import cn from 'classnames';
import './Pagination.scss';

const getNumbers = (to: number) => {
  const numbers = [];

  for (let n = 1; n <= to; n++) {
    numbers.push(n);
  }

  return numbers;
};

interface Props {
  totalPhones: number;
  phonesPerPage: number;
  onCurrentPage: (numberOfPage: number) => void;
  onPrevPage: () => void;
  onNextPage: (paginationLength: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({
  totalPhones,
  phonesPerPage,
  onCurrentPage,
  onPrevPage,
  onNextPage,
  currentPage,
}) => {
  const paginationLength = Math.ceil(totalPhones / phonesPerPage);
  const paginationItems = getNumbers(paginationLength);

  return (
    <ul className='pagination'>
      <li>
        <button
          className={cn(
            'pagination__button',
            'pagination__button--prev',
            {
              'pagination__button--disabled': currentPage === 1,
            },
          )}
          onClick={onPrevPage}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={cn(
                { 'pagination__arrow--disabled': currentPage === 1 },
              )}
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M5.47124 0.528758C5.21089 0.268409 4.78878 0.268409 4.52843 0.528758L0.528433 4.52876C0.268083 4.78911 0.268083 5.21122 0.528433 5.47157L4.52843 9.47157C4.78878 9.73192 5.21089 9.73192 5.47124 9.47157C5.73159 9.21122 5.73159 8.78911 5.47124 8.52876L1.94265 5.00016L5.47124 1.47157C5.73159 1.21122 5.73159 0.789108 5.47124 0.528758Z"
              fill="#F1F2F9"
            />
          </svg>

        </button>
      </li>

      {paginationItems.map(item => (
        <li key={item} >
          <button
            className={cn(
              'pagination__button',
              'pagination__button--page-number',
              { 'pagination__button--selected': currentPage === item },
            )
            }
            onClick={() => onCurrentPage(item)}
          >
            {item}
          </button>
        </li>
      ))}

      <li>
        <button
          className={cn(
            'pagination__button',
            'pagination__button--next',
            {
              'pagination__button--disabled': currentPage === paginationLength,
            },
          )}
          onClick={() => onNextPage(paginationLength)}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={cn({
                'pagination__arrow--disabled': currentPage === paginationLength,
              })}
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M0.528758 0.528758C0.789108 0.268409 1.21122 0.268409 1.47157 0.528758L5.47157 4.52876C5.73192 4.78911 5.73192 5.21122 5.47157 5.47157L1.47157 9.47157C1.21122 9.73192 0.789108 9.73192 0.528758 9.47157C0.268409 9.21122 0.268409 8.78911 0.528758 8.52876L4.05735 5.00016L0.528758 1.47157C0.268409 1.21122 0.268409 0.789108 0.528758 0.528758Z" fill="#F1F2F9"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};
