import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedCategories from './components/FeaturedCategories';
import BentoBanner from './components/BentoBanner';
import ProductSection from './components/ProductSection';
import TopSelling from './components/TopSelling';
import BrandSection from './components/BrandSection';
import BrandProducts from './components/BrandProducts';
import CategoryTabs from './components/CategoryTabs';
import FeaturedProducts from './components/FeaturedProducts';
import KidsSection from './components/KidsSection';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { cubanShirts, premiumPanjabi } from './data/products';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedCategories />
        <BentoBanner />
        <ProductSection
          title="CUBAN SHIRT"
          subtitle="Upto 20% off!"
          viewAllLink="#"
          products={cubanShirts}
          isSlider={true}
        />
        <ProductSection
          title="PREMIUM PANJABI"
          subtitle="Buy Premium Panjabi at best Offer!"
          viewAllLink="#"
          products={premiumPanjabi}
          isSlider={true}
        />
        <TopSelling />
        <BrandSection />
        {/* <BrandProducts /> */}
        {/* <CategoryTabs /> */}
        <FeaturedProducts />
        <KidsSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
