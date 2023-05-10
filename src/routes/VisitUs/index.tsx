import Card from '../../components/Card';
import Header from '../../components/Header';
import './styles.css';

export default function VisitUs() {
    return (
        <>
            <Header />
            <main>
                <section className='ct-section'>
                    <div className='ct-card-container'>
                        <h2>Venha nos Visitar</h2>
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
}