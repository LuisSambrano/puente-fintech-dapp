import React from 'react';
import { useRouter } from 'next/router';

const SlugPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>This is a dynamic page with slug: {slug}</p>
      {/* dynamic content based on the slug parameter */}
    </div>
  );
}

export default SlugPage;
