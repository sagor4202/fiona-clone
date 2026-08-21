import PageLayout from '../components/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <h2>Get in Touch</h2>
      <p>If you have any questions, feedback, or need assistance, we're here to help.</p>
      <div style={{ marginTop: '30px' }}>
        <p><strong>Email:</strong> support@fionabd.com</p>
        <p><strong>Phone:</strong> +880 1234 567890</p>
        <p><strong>Address:</strong> Dhaka, Bangladesh</p>
      </div>
    </PageLayout>
  );
}
