import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Welcome" description="Embedr Documentation">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        <h1>
          Embedded Finance Redefined
        </h1>

        {/* Navigation Buttons */}
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </Layout>
  );
}