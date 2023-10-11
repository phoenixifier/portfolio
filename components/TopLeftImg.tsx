import Image from 'next/image';
import React from 'react';

const TopLeftImg: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 z-10 w-[200px] mix-blend-color-dodge xl:w-[400px]">
      <Image src="/top-left-img.png" width={400} height={400} alt="TopLeftImg" />
    </div>
  );
};

export default TopLeftImg;
