import LoadYearForm from "@/components/load-year-form";

export default function Home() {
  return (
      <>
          <main>
              <div className="flex flex-col items-center bg-blue-200 p-4">
                  <h1>Welcome to my book site!</h1>
              </div>
              <div className="flex flex-col items-center bg-pink-200 p-4">
                  <p>Click a button to show books that I&apos;ve read from the given year!</p>
              </div>
              <LoadYearForm />
          </main>
      </>
  );
}