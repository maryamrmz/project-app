import { GlassPane } from '@/components';
import '@/styles/global.css';
import { FC, ReactNode } from 'react';

interface DashboardRootLayoutProps {
  children: ReactNode;
}

const DashboardRootLayout: FC<DashboardRootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen rainbow-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
