import React from 'react';
import Button from '@/components/atoms/Button';

type Props = {
  data: {
    title: string;
    desc: string;
  }[];
};

function HomeTemplate(props: Props) {
  const renderBody = React.useCallback((data: Props['data']) => {
    return data.map((item, i) => (
      <React.Fragment key={i}>
        <p className="heading mb-2">{item.title}</p>
        <p className="paragraph mb-4 last:mb-0">{item.desc}</p>
      </React.Fragment>
    ));
  }, []);

  return (
    <>
      <section className="mb-6">{renderBody(props.data)}</section>
      <section>
        <Button className="w-full py-6 mb-5">Register now</Button>
      </section>
    </>
  );
}

export default HomeTemplate;
