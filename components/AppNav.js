import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline';
import Image from 'next/image';
import AppNavItem from './AppNavItem';
import Link from 'next/link';

function AppNav() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <Link href='/'><AppNavItem title='HOME' Icon={HomeIcon} /></Link>
        <AppNavItem title='TRENDING' Icon={LightningBoltIcon} />
        <AppNavItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <AppNavItem title='COLLECTIONS' Icon={CollectionIcon} />
        <AppNavItem title='SEARCH' Icon={SearchIcon} />
        <AppNavItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
      className='object-contain'
      src='https://links.papareact.com/ua6'
      width={200}
      height={100}
      alt='hulu logo' 
      />

    </header>
  )
}

export default AppNav;
