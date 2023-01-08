
import Head from 'next/head'
import { ComponentType, Fragment } from 'react'

type withOpenGraphProps = {
    title: string
    description: string
}

function withOpenGraph<T>(Component: ComponentType<T>, meta: withOpenGraphProps) {
    const wrappedComponent = (props: T & withOpenGraphProps) => {
        return (
            <Fragment>
                <Head>
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:site_name" content="Евгений Антоненков" />
                    <meta property="og:url" content="https://yazmeyaa.itracers.xyz/" />
                    <meta property="og:type" content="article" />
                    <meta property="og:image" content="https://yazmeyaa.itracers.xyz/images/my_photo.jpg" />
                    <meta property="og:image:width" content="630" />
                    <meta property="og:image:height" content="630" />
                </Head>
                <Component {...props} />
            </Fragment>

        )
    }
    return wrappedComponent
}

export { withOpenGraph }
