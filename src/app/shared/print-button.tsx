'use client';

import { PiPrinterBold } from 'react-icons/pi';
import { Button } from '@/components/ui/button';

export default function PrintButton() {
  function handlePrint() {
    console.log('write print logic');
  }

  return (
    <Button
      onClick={() => handlePrint()}
      variant="outline"
      className="w-full @lg:w-auto"
    >
      <PiPrinterBold className="me-1.5 h-[17px] w-[17px]" />
      Print
    </Button>
  );
}
