'use client';

import { CPTButton } from '@cpt-group/cpt-prime-react';

export const HomeHero = () => {
  const handleDummyAction = () => {
    // Dummy action for now
    console.log('Dummy button clicked');
  };

  return (
    <div className="flex flex-column align-items-center justify-content-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to CPT Data Manager</h1>
        <p className="text-xl text-color-secondary mb-6">
          Manage your data with ease
        </p>
        <div className="flex gap-3 justify-content-center flex-wrap">
          <CPTButton
            label="Get Started"
            icon="pi pi-arrow-right"
            iconPos="right"
            size="large"
            onClick={handleDummyAction}
            className="p-button-primary"
          />
        </div>
      </div>
    </div>
  );
};

