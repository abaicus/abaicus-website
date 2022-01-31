import { CalendarIcon, UserIcon } from '@heroicons/react/outline';

const BlogMeta = ({ author, date }) => {
    if (!author && !date) return null;

    return (
        <ul className='flex items-center text-center justify-center capitalize space-x-5 text-sm mb-3'>
            {author && (
                <li className='flex justify-center items-center'>
                    <UserIcon className='h-4 w-4' /><span className='ml-1'>{author.name}</span>
                </li>
            )}
            {date && (
                <li className='flex justify-center items-center'>
                    <CalendarIcon className='h-4 w-4' /><span className='ml-1'>{date}</span>
                </li>
            )}
        </ul >
    )
}


export default BlogMeta;