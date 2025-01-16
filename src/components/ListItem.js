import React from 'react'

const ListItem = ({gitAction}) => {
  const {
    author,
    action,
    from_branch,
    to_branch,
    timestamp
  } = gitAction
  return (
    <div>
      {action === 'PULL_REQUEST' && <div className='text-lg bg-slate-50 py-3 px-7 my-2 rounded-md'>
        <span className='font-extrabold italic'>{author}</span> submitted a <span className='underline'>pull request</span> from <span className='text-red-700 font-bold'>"{from_branch}"</span> to <span className='text-green-800 font-bold'>"{to_branch}"</span> on <span className='font-normal font-mono'>{timestamp}</span>
      </div>}
      {action === 'PUSHED' && <div className='text-lg bg-slate-50 py-3 px-7 my-2 rounded-md'>
        <span className='font-extrabold italic'>{author}</span> <span className='underline'>pushed</span> to <span className='font-bold'>"{to_branch}"</span> on <span className='font-normal font-mono'>{timestamp}</span>
      </div>}
      {action === 'MERGED' &&<div className='text-lg bg-slate-50 py-3 px-7 my-2 rounded-md'>
        <span className='font-extrabold italic'>{author}</span> <span className='underline'>merged</span> branch <span className='text-red-700 font-bold'>"{from_branch}"</span> to <span className='text-green-800 font-bold'>"{to_branch}"</span> on <span className='font-normal font-mono'>{timestamp}</span>
      </div>}

    </div>
  )
}

export default ListItem
