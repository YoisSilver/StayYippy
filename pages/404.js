import Image from 'next/image'
import { Fragment } from 'react'
export default function Custom404() {
    return (
        <Fragment>
            <Image src='/errorpic1.jpg' layout='fill' alt='test' width={100} height={100} quality={100}>

            </Image>

        </Fragment>)
}