import React from 'react'
import LifecycleCard from './LifecycleCard/LifecycleCard';
import SectionTitle from './SectionTile/SectionTitle';

const LifeCycleSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <SectionTitle
        title="The"
        highlight="Financial Lifecycle"
        subtitle="Every month is a new round. Every choice shapes your future."
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <LifecycleCard
          step="1"
          title="payments"
          subTitle="Salary Hits"
          description="Receive your monthly allowance or first paycheck. The clock starts now."
        />
        <LifecycleCard
          step="2"
          title="balance"
          subTitle="Decision Time"
          description="Invest in SIPs, Pay your rent, or blow it all on that weekend trip to Goa?"
        />
        <LifecycleCard
          step="3"
          title="insights"
          subTitle="The Impact"
          description="See your net worth grow or watch your virtual wallet hit zero. Real consequences, zero risk."
        />
      </div>
    </section>
  );
}

export default LifeCycleSection;