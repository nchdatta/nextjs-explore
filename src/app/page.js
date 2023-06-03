import TodoCard from "@/components/TodoCard";


export default async function Home() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    next: {
      tags: ['posts']
    }
  });
  const data = await response.json();


  return (
    <main >
      <div>Home Page</div>

      <p style={{ color: 'green' }}>Todos Data will be shows here!</p>
      <TodoCard todos={data} />
    </main>
  )
}
