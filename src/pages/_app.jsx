import '@/styles/globals.css';
import App from 'next/app';

export default function BaseApp({ Component, pageProps, example }) {
    return (
        <>
            <p>Data :{example}</p>
            <Component {...pageProps} />;
        </>
    );
}

BaseApp.getInitialProps = async (context) => {
    const ctx = await App.getInitialProps(context);

    return { ...ctx, example: 'data' };
};
