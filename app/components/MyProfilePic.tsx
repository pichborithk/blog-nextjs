import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 w-52 h-52 object-cover object-top bg-white'
        src='/images/profile-photo.png'
        width={200}
        height={200}
        alt='Pichborith'
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
