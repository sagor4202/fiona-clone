import { kidsProducts } from '../data/products';
import ProductSection from './ProductSection';

export default function KidsSection() {
  return (
    <ProductSection
      title="KIDS ITEMS"
      subtitle="For your Little Star!"
      viewAllLink="#"
      products={kidsProducts}
    />
  );
}
