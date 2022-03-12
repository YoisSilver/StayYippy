import Image from 'next/image'
import { Fragment } from 'react'
export default function Custom404() {
    return (
        <Fragment>
            <div className="text-container" style={{
                backgroundColor: "lightblue", position: "fixed", color: 'white', left: 0,
                top: 0
            }}>
                404 error- <br></br>
                Oops, the owner hasnt added this page yet, contact him to get it fixed
            </div>
            <Image src='/errorpic1.jpg' layout='fill' alt='test' width={100} height={100}>

            </Image>

        </Fragment>)
}