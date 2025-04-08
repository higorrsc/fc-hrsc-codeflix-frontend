import Image from 'next/image';

export const UserProfile = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='/profile.png'
        alt='Profile'
        width={32}
        height={32}
        className='cursor-pointer rounded'
      />
    </div>
  );
};
