'use client';

export default function DashboardPage() {


  return (    
    <div>
    </div>
  );
}

// authenticate using middleware instead, I think it is better but
  // leave this code for now!
  
  /*  const session = await getServerSession();
  
  if (!session){
    return (
      <div>private dashboard page - you need to be logged in to view this</div>
    );
  }
  else if (session){
    return (
      <div>you are logged in</div>
    )
  } */