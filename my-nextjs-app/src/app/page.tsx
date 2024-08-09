
import Link from 'next/link';

export default function Home() {
  return (
  
      <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
         <h1 className="text-lg font-bold"> Hello World from Panaverse DAO!</h1>
          <br/>
          <Link href="/name">Go to name page</Link>
    </div>
    </nav>
    
  )
}
