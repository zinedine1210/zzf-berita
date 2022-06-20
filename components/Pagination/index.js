import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{ faBackward, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

const Pagination = ({page, pagerList, urlData, query}) => {
    let minPage = 1
    let maxPage = 5
    if(page > 3){
        minPage = page - 2
        maxPage = page + 2
        if(maxPage > pagerList){
            if(maxPage - pagerList < 2){
                minPage = page - 3
                maxPage = page + 1
            } else {
                let varPage = page - 4
                minPage = page - 4 === 0 ? 1:varPage
                maxPage = page
            }
        }
    } else {
        if(maxPage > pagerList){
            maxPage = pagerList
        }
    }
   
 
    let arrayPages = []

    for(var i=minPage, l=maxPage; i<=l; i++){
        arrayPages.push(i)
    }

    return (
        <div className="flex space-x-1 text-gray-100">
            {
                    page > 1 ?
                    <Link href={`${urlData}?page=${1}${query ? query:""}`}>
                        <span title="previous" type="button" className="cursor-pointer inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md bg-white text-sky-500 dark:bg-gray-900 dark:border-gray-800 dark:text-violet-500">
                            <FontAwesomeIcon icon={faBackward} />
                        </span>
                    </Link>:""
            }
            {
                    page > 1 ?
                    <Link href={`${urlData}?page=${page-1}${query ? query:""}`}>
                        <span title="previous" type="button" className="cursor-pointer inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md bg-white text-sky-500 dark:bg-gray-900 dark:border-gray-800 dark:text-violet-500">
                            <FontAwesomeIcon icon={faCaretLeft} />
                        </span>
                    </Link>
                :""
            }
            {
                arrayPages && arrayPages.length > 0 ? arrayPages.map((e, i) => {
                        return <span className={`cursor-pointer inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md bg-white text-sky-500 dark:text-violet-500 dark:bg-gray-900 ${page === e ? 'border border-sky-500 dark:border-violet-500':''}`} key={i}><Link href={`${urlData}?page=${e}${query ? query:""}`}><a className={`page-link ${page === e ? '':''}`}>{e}</a></Link></span>
                }):''
            }
            {
                page < pagerList ? 

                <Link href={`${urlData}?page=${page+1}${query ? query:""}`}>
                    <span title="previous" type="button" className="cursor-pointer inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md bg-white text-sky-500 dark:bg-gray-900 dark:border-gray-800 dark:text-violet-500">
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                </Link>
                :"" 
            }
            {
                page < pagerList ?
                <Link href={`${urlData}?page=${pagerList}${query ? query:""}`}>
                    <span title="previous" type="button" className="cursor-pointer inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md bg-white text-sky-500 dark:bg-gray-900 dark:border-gray-800 dark:text-violet-500">
                        <FontAwesomeIcon icon={faBackward} className="rotate-180" />
                    </span>
                </Link>
                    :""
            }
        </div>
    );
};

export default Pagination;