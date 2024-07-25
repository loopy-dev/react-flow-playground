import dynamic from 'next/dynamic';

const ReactFlowPage = dynamic(() => import('~/react-flow/react-flow-page'), {
  ssr: false,
});

const Page = () => {
  return (
    <main className="mx-auto max-w-[1200px]">
      <h1 className="text-xl font-bold">React-flow Playground</h1>
      <ReactFlowPage />
    </main>
  );
};

export default Page;
