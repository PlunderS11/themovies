import { category, movieType } from '../api/tmdbApi';
import HeroSlide from '../components/heroSlide/HeroSlide';
import SectionCategory from '../components/sectionCategory/SectionCategory';

function Home() {
    return (
        <div>
            <HeroSlide />
            <div style={{ margin: 'auto', minWidth: '100%' }}>
                <SectionCategory
                    title="Trending Movies"
                    link="/movie"
                    category={category.movie}
                    type={movieType.popular}
                />
                <SectionCategory
                    title="Top Rated Movies"
                    link="/movie"
                    category={category.movie}
                    type={movieType.top_rated}
                />
                <SectionCategory
                    title="Trending TV"
                    link="/tv"
                    category={category.tv}
                    type={movieType.popular}
                />
                <SectionCategory
                    title="Top Rated TV"
                    link="/tv"
                    category={category.tv}
                    type={movieType.top_rated}
                />
            </div>
        </div>
    );
}

export default Home;
