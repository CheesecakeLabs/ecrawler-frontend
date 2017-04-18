import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Image from './'


storiesOf('Image', module)
  .add('default', () => (
    <Image src="http://lorempixel.com/output/people-q-c-640-480-4.jpg" />
  ))
  .add('small', () => (
    <Image
      src="http://lorempixel.com/output/people-q-c-640-480-4.jpg"
      height={50}
    />
  ))
  .add('force aspect ratio', () => (
    <Image
      src="http://lorempixel.com/output/people-q-c-640-480-4.jpg"
      height={300}
      width={200}
    />
  ))
  .add('fail to load', () => (
    <Image
      src="notaurl.jpg"
      width={200}
      alt="This should be an image"
    />
  ))
