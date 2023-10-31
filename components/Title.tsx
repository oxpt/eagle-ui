export default function Title({ title, description }: { title: string; description: string }) {
  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
      <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>{title}</h2>
      <p className='mt-6 text-lg leading-8 text-gray-600'>{description}</p>
    </div>
  );
}
