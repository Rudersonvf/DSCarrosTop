import Card from '../../components/Card';
import Comments from '../../components/Comments';
import Header from '../../components/Header';
import './styles.css';

export default function VisitUs() {
    return (
        <>
            <Header />
            <main>
                <section className='ct-section'>
                    <div id='ct-card-id' className='ct-card-container'>
                        <h2>Venha nos Visitar</h2>
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className='ct-section'>
                    <div id='ct-comment-id' className='ct-card-container'>
                        <h2>O que estão dizendo</h2>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                </section>
            </main>
        </>
    );
}