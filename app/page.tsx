import LoadYearForm from "@/components/load-year-form";

// bg-gradient-to-b from-purple-200 to-pink-300
export default function Home() {
  return (
      <>
          <main>
              <div className="min-h-screen bg-blue-200">
                  <div className="flex flex-col items-center  p-4">
                      <h1>Welcome to my book site!</h1>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <p>Click a button to show books that I&apos;ve read from the given year!</p>
                  </div>
                  <LoadYearForm />
              </div>
          </main>
      </>
  );
}