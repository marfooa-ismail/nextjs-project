
'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      
        <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between text-center">
           <p className="text-lg font-bold">My name is MARFOWA KIANAT.</p> 
            <br/>
            
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>
      </nav>
    )
  }
