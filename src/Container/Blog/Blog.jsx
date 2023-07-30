import React from 'react'
import './blog.css'
import { Article } from '../../Components'
import {blog01,blog02,blog03,blog04,blog05} from './import'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A Lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article imageUrl={blog01} date='Sep 26, 2023' title={'GPT-3 and Open AI is the future. Let us explore how it is?'}/>
        </div>
        <div className='gpt3__blog-container-groupB'>
          <Article imageUrl={blog02} date='Sep 26, 2023' title={'GPT-3 and Open AI is the future. Let us explore how it is?'}/>
          <Article imageUrl={blog03} date='Sep 26, 2023' title={'GPT-3 and Open AI is the future. Let us explore how it is?'}/>
          <Article imageUrl={blog04} date='Sep 26, 2023' title={'GPT-3 and Open AI is the future. Let us explore how it is?'}/>
          <Article imageUrl={blog05} date='Sep 26, 2023' title={'GPT-3 and Open AI is the future. Let us explore how it is?'}/>
        </div>
      </div>
    </div>
  )
}

export default Blog