import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

interface SearchInputProps {
  placeholder?: string
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <div className='border rounded-full flex justify-center items-center'>
      <Input
        type='search'
        placeholder={placeholder || 'Search'}
        className='border-none rounded-l-full'
      />
      <Button variant='ghost' size='icon' className='rounded-r-full'>
        <Search />
        <span className='sr-only'>Search opportunities</span>
      </Button>
      
    </div>
  )
}

export default SearchInput
